import cookie from 'cookie';
import auth from '../auth/sockets-auth.js';

export const WebSockets = (io) => {
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
        });
    });
};
export default WebSockets;
