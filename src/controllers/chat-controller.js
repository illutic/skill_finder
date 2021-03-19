/** @module auth-controller */
/** Provides authentication related callback functions.
 */
import sequelize from 'sequelize';
import Photo from '../models/Photo.js';
import User from '../models/User.js';
/** Chatrooms by user ID
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
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
                    include: [
                        {
                            model: Photo,
                            attributes: { exclude: ['id', 'UserId'] },
                        },
                    ],
                },
            ],
        });
        res.json({ chats });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Messages by chatroom ID
 * Should include user ID somehow
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 * */
export const getMessages = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

/** Files by chatroom ID
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 * */
export const getFiles = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

/** Create a chatroom
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 * */
export const createChat = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

/** Send a message
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 * */
export const postMessage = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

/** Send a file
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 * */
export const postFile = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

/** delete a chatroom
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 * */
export const deleteChat = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
