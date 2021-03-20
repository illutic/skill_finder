import cookie from 'cookie';
import auth from '../auth/sockets-auth.js';

export const WebSockets = (io) => {
    /** Join to room, and allow 1 connection per user using a redis adapter */
    io.on('connection', async (socket) => {
        console.log('Connected ', socket.id);

        socket.on('authentication', async () => {
            try {
                console.log('Authenticating...');
                const cookies = cookie.parse(socket.request.headers.cookie);
                const id = await auth(cookies);
                socket.emit('authorized');
            } catch (err) {
                socket.emit('unauthorized', err);
            }
        });

        socket.on('disconnect', () => {
            console.log(socket.id, ' disconnected');
        });

        socket.on('join', (chatId) => {
            socket.join(chatId);
            console.log(socket.rooms);
        });

        socket.on('message', (args) => {
            console.log(socket.rooms);
            console.log(args);
        });
    });
};
export default WebSockets;
