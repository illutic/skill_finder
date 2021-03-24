import cookie from 'cookie';
import auth from '../auth/sockets-auth.js';
import Chat from '../models/Chat.js';
import Message from '../models/Message.js';
import Request from '../models/Request.js';
import User from '../models/User.js';
/** Web Socket Configuration
 * @param {Server} io - Requires a Websocket Server created from the http Server.
 */
export const WebSockets = (io) => {
    /** WebSocket Server On Connection event.
     * On connection the server emits an authentication event to the socket that just connected. On authorization, emits an 'authorized' event.
     * @param {websocket} socket - Requires a websocket object.
     */
    io.on('connection', async (socket) => {
        // console.log('Connected ', socket.id);
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
            // console.log(socket.id, ' disconnected');
        });

        socket.on('join', (chatId) => {
            socket.join(chatId);
            // console.log(socket.id, 'connected to Room', chatId);
        });

        socket.on('leaveRoom', (chatId) => {
            socket.leave(chatId);
            // console.log(socket.id, 'left Room', chatId);
        });

        socket.on('requestNotification', async (teacher) => {
            if (teacher !== null) {
                // console.log('Notification Request Received!');
                await Request.findOrCreate({
                    where: {
                        toId: teacher.id,
                        fromId: id,
                        UserId: teacher.id,
                    },
                }).then(async (request) => {
                    if (request[1]) {
                        const student = await User.findOne({ where: { id } });
                        // request[0] is the object instance, and 1 is created
                        // console.log(`Emitting to ${user.id}`);
                        // Emit to teacher
                        io.to(teacher.id).emit('request', {
                            id: request[0].id,
                            toId: teacher.id,
                            fromId: id,
                            User: student,
                        });
                        // Emit to student
                        // console.log(`Emitting to ${id}`);
                        io.to(id).emit('request', {
                            id: request[0].id,
                            toId: teacher.id,
                            fromId: id,
                            User: teacher,
                        });
                    }
                });
            }
        });

        /** On Receiving a Request Accept,
         * @param {string} requestId - request id string, passed in from the client
         * The server finds the database entity for the request, creates a chatroom, destroys the request and emits to the user who sent it that it was accepted.
         */
        socket.on('notificationAccept', async (requestId) => {
            if (requestId !== '') {
                const request = await Request.findOne({
                    where: { id: requestId },
                });
                const teacher = await User.findOne({
                    where: { id: request.toId },
                });
                const student = await User.findOne({
                    where: { id: request.fromId },
                });
                const chat = await Chat.create();
                await chat.addUser(teacher);
                await chat.addUser(student);
                await request.destroy();

                io.to(student.id).emit('acceptRequest', {
                    from: id,
                    content: 'accepted',
                });
            }
        });

        /** On Receiving a Request Denial,
         * @param {string} requestId - request id string, passed in from the client
         * The server finds the database entity for the request destroys it and emits to the user who sent it that it was denied.
         */
        socket.on('notificationDeny', async (requestId) => {
            if (requestId !== '') {
                const request = await Request.findOne({
                    where: { id: requestId },
                });
                const { fromId } = request;
                await request.destroy();
                io.to(fromId).emit('denyRequest', {
                    from: id,
                    content: 'denied',
                });
            }
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
