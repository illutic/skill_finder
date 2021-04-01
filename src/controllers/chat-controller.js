/** @module ChatController */
import sequelize from 'sequelize';
import User from '../models/User.js';
import Message from '../models/Message.js';

/** Get user's chatrooms - responds with data of chats that the user is part of. It is meant to operate on protected routes only. */
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

/** Get chat messages - responds with messages of a particular chat defined by chat ID. It is meant to operate on protected routes only.
 * @param {uuid} chatId - requires a chat ID  passed as URL parameter.
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
