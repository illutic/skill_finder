import cookie from 'cookie';
import auth from '../auth/sockets-auth.js';
import Chat from '../models/Chat.js';
import Message from '../models/Message.js';

export const WebSockets = (io) => {
    /** Join to room, and allow 1 connection per user using a redis adapter */
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

        socket.on('disconnect', (chatId) => {
            socket.leave(chatId);
            console.log(socket.id, ' disconnected');
        });

        socket.on('join', (chatId) => {
            socket.join(chatId);
        });

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
