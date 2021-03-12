// import Chat from '../models/Chat.js';
// import Message from '../models/Message.js';
// import File from '../models/File';
// Chatrooms by user ID
export const getChatrooms = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

// Messages by chatroom ID
// Should include user ID somehow
export const getMessages = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

// Files by chatroom ID
export const getFiles = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

export const createChat = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

export const postMessage = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

export const postFile = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

export const deleteChat = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err });
    }
};
