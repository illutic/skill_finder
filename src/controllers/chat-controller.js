/** @module auth-controller */
/** Provides authentication related callback functions.
 */
// import Chat from '../models/Chat.js';
// import Message from '../models/Message.js';
// import File from '../models/File';

/** Chatrooms by user ID
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 */
export const getChatrooms = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
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
