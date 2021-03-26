import cookie from 'cookie';
import auth from '../auth/sockets-auth.js';
import NOTIFICATION_TYPES from '../constants/notification-types.js';
import Chat from '../models/Chat.js';
import Message from '../models/Message.js';
import Request from '../models/Request.js';
import User from '../models/User.js';
import Notification from '../models/Notification.js';

/** Web Socket Configuration
 * @param {Server} io - Requires a Websocket Server created from the HTTP Server.
 */
export const WebSockets = (io) => {
    /** WebSocket Server On Connection
     * On connection the server emits an authentication event to the socket that just connected. On authorisation, emits an 'authorized' event, otherwise - 'unauthorised'.
     * @param {websocket} socket - Requires a WebSocket object.
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
         * @param {string} chatId - A chatId is passed when the socket disconnects.
         * On socket disconnection the server removes the socket from the specified chat room.
         */
        socket.on('disconnect', (chatId) => {
            socket.leave(chatId);
        });

        socket.on('joinChat', (chatId) => {
            socket.join(chatId);
        });

        socket.on('leaveChat', (chatId) => {
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
            if (request[0].accepted === true || request[0].pending === false) {
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
                content: { requestId: request[0].id, user: fromUser },
            });
            toUser.addNotification(notification);

            // Emit
            io.to(fromUser.id).emit('incomingRequest');
            io.to(toUser.id).emit('incomingRequest');
        });

        /** On Receiving a Request Accept
         * @param {string} requestId - Request ID, passed in from the client-side.
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
            if (request.accepted === true || request.pending === false) {
                return;
            }
            request.accepted = true;
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
                content: { chatId: chat.id, user: toUser },
            });
            fromUser.addNotification(notification);

            // Emit
            io.to(fromUser.id).emit('acceptedRequest');
            io.to(toUser.id).emit('acceptedRequest');
        });

        /** On Receiving a Request Deny
         * @param {string} requestId - Request ID passed from the client-side.
         * The server finds the database entity for the request, deactivates the request and emits to the user who sent it that it was denied.
         */
        socket.on('denyRequest', async (requestId) => {
            if (!requestId) {
                return;
            }

            // Find the request
            const request = await Request.findOne({
                where: { id: requestId },
            });
            if (!request) {
                throw Error('Could not deny request as it does not exist.');
            }
            if (request.pending === false) {
                return;
            }

            // Find involved users
            const fromUser = await User.findOne({
                where: { id: request.fromId },
            });
            const toUser = await User.findOne({
                where: { id: request.toId },
            });

            // Destroy the request
            await request.destroy();

            // Create notification for request sender
            const notification = await Notification.create({
                type: NOTIFICATION_TYPES.deniedRequest,
                content: { user: toUser },
            });
            fromUser.addNotification(notification);

            // Emit
            io.to(fromUser.id).emit('deniedRequest');
        });

        /** On Receiving a message,
         * @param {string} chatId - Chat ID, passed from the client-side.
         * @param {string} message - The message content that the client sent.
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
