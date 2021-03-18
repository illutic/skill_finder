import cookie from 'cookie';
import Chat from '../models/Chat.js';
import User from '../models/User.js';
import auth from '../auth/sockets-auth.js';

export const onConnection = (io) => {
    io.on('connection', async (socket) => {
        const cookies = cookie.parse(socket.request.headers.cookie);
        const id = await auth(cookies);
        const chats = await Chat.findAll({
            include: [
                {
                    model: User,
                    through: { where: { UserId: id } },
                },
            ],
        });
        chats.forEach((chat) => {
            socket.join(chat.id);
        });
    });
};
export default onConnection;
