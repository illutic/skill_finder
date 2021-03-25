import cookie from 'cookie';
import auth from '../auth/sockets-auth.js';
import NOTIFICATION_TYPES from '../constants/notification-types.js';
import Chat from '../models/Chat.js';
import Message from '../models/Message.js';
import Request from '../models/Request.js';
import User from '../models/User.js';
import Notification from '../models/Notification.js';

/** Web Socket Configuration
 * @param {Server} io - Requires a Websocket Server created from the http Server.
 */
export const WebSockets = (io) => {
    /** WebSocket Server On Connection event.
     * On connection the server emits an authentication event to the socket that just connected. On authorization, emits an 'authorized' event.
     * @param {websocket} socket - Requires a websocket object.
     */
    io.on('connection', async (socket) => {
        let id;

        socket.on('authentication', async () => {
            try {
                const cookies = cookie.parse(socket.request.headers.cookie);
                id = await auth(cookies);
                socket.join(id);
                socket.emit('authorized');
            } catch (err) {
                socket.emit('unauthorized', err);
            }
        });

        /** Disconnection
         * @param {string} chatId - A chatId is passed when the socket disconnects
         * On socket disconnection the server removes the socket from the specified room.
         */
        socket.on('disconnect', (chatId) => {
            socket.leave(chatId);
        });

        socket.on('join', (chatId) => {
            socket.join(chatId);
        });

        socket.on('leaveRoom', (chatId) => {
            socket.leave(chatId);
        });

        socket.on('newRequest', async (toId) => {
            if (!toId) {
                return;
            }

            // Find/create request and check if it's active
            const request = await Request.findOrCreate({
                where: {
                    toId,
                    fromId: id,
                },
            });
            if (request[0].pending === false) {
                return;
            }

            // Find involved users
            const toUser = await User.findOne({
                where: {
                    id: toId,
                },
            });
            const fromUser = await User.findOne({
                where: {
                    id,
                },
            });
            if (!toUser || !fromUser) {
                return;
            }

            // Create notification for request receiver
            const notification = await Notification.create({
                type: NOTIFICATION_TYPES.incomingRequest,
                content: { requestId: request[0].id, fromUser },
            });
            toUser.addNotification(notification);

            // Emit
            io.to(toId).emit('incomingRequest');
        });

        /** On Receiving a Request Accept,
         * @param {string} requestId - request id string, passed in from the client
         * The server finds the database entity for the request, creates a chatroom, deactivates the request and emits to the user who sent it that it was accepted.
         */
        socket.on('acceptRequest', async (requestId) => {
            if (!requestId) {
                return;
            }

            // Find request and set pending to false
            const request = await Request.findOne({
                where: { id: requestId },
            });
            if (!request) {
                return;
            }
            request.pending = false;
            await request.save();

            // Find involved users
            const fromUser = await User.findOne({
                where: { id: request.fromId },
            });
            const toUser = await User.findOne({
                where: { id: request.toId },
            });

            // Create chat for involved users
            const chat = await Chat.create();
            await chat.addUser(fromUser);
            await chat.addUser(toUser);

            // Create notification for request sender
            const notification = await Notification.create({
                type: NOTIFICATION_TYPES.acceptedRequest,
                content: { chatId: chat.id, toUser },
            });
            fromUser.addNotification(notification);

            // Emit
            io.to(fromUser.id).emit('acceptedRequest');
            io.to(toUser.id).emit('acceptedRequest');
        });

        /** On Receiving a Request Denial,
         * @param {string} requestId - request id string, passed in from the client
         * The server finds the database entity for the request, deactivates it and emits to the user who sent it that it was denied.
         */
        socket.on('denyRequest', async (requestId) => {
            if (!requestId) {
                return;
            }

            // Find request and set pending to false
            const request = await Request.findOne({
                where: { id: requestId },
            });
            if (!request) {
                return;
            }
            request.pending = false;
            await request.save();

            // Emit
            io.to(request.toId).emit('deniedRequest');
        });

        /** On Receiving a message,
         * @param {string} chatId - chat id string, passed in from the client
         * @param {string} message - the message content that the client sent.
         * The server creates a new database entity for the message and emits the database object to the room that was specified.
         */
        socket.on('sendMessage', async (chatId, message) => {
            let newMessage = message;
            if (newMessage.length > 255) {
                newMessage = newMessage.substring(0, 255);
            }
            const databaseMessage = await Message.create({
                content: newMessage,
                userId: id,
                ChatId: chatId,
            });
            io.to(chatId).emit('message', {
                id: databaseMessage.id,
                userId: id,
                createdAt: databaseMessage.createdAt,
                content: message,
            });
        });
    });
};
export default WebSockets;
