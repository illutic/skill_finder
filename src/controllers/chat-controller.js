import sequelize from 'sequelize';
import User from '../models/User.js';
import Message from '../models/Message.js';

/** Chatrooms by user ID
 */
export const getChatrooms = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findOne({
            where: { id: userId },
        });
        const chats = await user.getChats({
            include: [
                {
                    model: User,
                    attributes: { exclude: ['email', 'password'] },
                    where: { id: { [sequelize.Op.not]: userId } },
                },
            ],
        });
        res.json({ chats });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Messages by chatroom ID
 * @param {uuid} chatId - Requires a chatId in the request url
 * */
export const getMessages = async (req, res) => {
    try {
        const messages = await Message.findAll({
            where: { ChatId: req.params.chatId },
        });
        res.send(messages);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

/** delete a chatroom
 * */
export const deleteChat = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
