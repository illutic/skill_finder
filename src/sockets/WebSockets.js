import cookie from 'cookie';
import auth from '../auth/sockets-auth.js';
import Chat from '../models/Chat.js';
import Message from '../models/Message.js';

/** Web Socket Configuration
 * @param {Server} io - Requires a Websocket Server created from the http Server.
 */
export const WebSockets = (io) => {
    /** WebSocket Server On Connection event.
     * On connection the server emits an authentication event to the socket that just connected. On authorization, emits an 'authorized' event.
     * @param {websocket} socket - Requires a websocket object.
     */
    io.on('connection', async (socket) => {
        console.log('Connected ', socket.id);
        let id;
        socket.on('authentication', async () => {
            try {
                const cookies = cookie.parse(socket.request.headers.cookie);
                id = await auth(cookies);
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
            console.log(socket.id, ' disconnected');
        });

        socket.on('join', (chatId) => {
            socket.join(chatId);
        });

        /** On Receiving a message,
         * @param {string} chatId - chat id string, passed in from the client
         * @param {string} message - the message content that the client sent.
         * The server creates a new database entity for the message and emits the database object to the room that was specified.
         */
        socket.on('sendMessage', async (chatId, message) => {
            const databaseMessage = await Message.create({
                content: message,
                userId: id,
                ChatId: chatId, // chatId
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
