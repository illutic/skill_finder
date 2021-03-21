import Chat from '../models/Chat.js';
import Request from '../models/Request.js';
import User from '../models/User.js';

export const postRequest = async (req, res) => {
    try {
        const { userId } = req;
        const { toId } = req.body;
        if (!toId) {
            throw Error('No receiver ID provided.');
        }
        const request = await Request.findOrCreate({
            where: {
                toId,
                fromId: userId,
            },
        });
        res.status(200).json({ request });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const denyRequest = async (req, res) => {
    try {
        const { requestId } = req.body;
        if (!requestId) {
            throw Error('No request ID provided.');
        }
        await Request.destroy({
            where: { id: requestId },
        });
        res.status(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const acceptRequest = async (req, res) => {
    try {
        const { requestId } = req.body;
        if (!requestId) {
            throw Error('No request ID provided.');
        }
        const request = await Request.findOne({
            where: { id: requestId },
        });
        const teacher = await User.findOne({ where: { id: request.toId } });
        const student = await User.findOne({ where: { id: request.fromId } });
        const chat = await Chat.create();
        chat.addUser(teacher);
        chat.addUser(student);
        await request.destroy();
        res.status(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getReceivedRequests = async (req, res) => {
    try {
        const { userId } = req;
        const request = await Request.findAll({
            where: {
                toId: userId,
            },
            include: {
                model: User,
                attributes: {
                    exclude: ['email', 'password'],
                },
            },
        });
        res.status(200).json({ request });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getSentRequests = async (req, res) => {
    try {
        const { userId } = req;
        const request = await Request.findAll({
            where: {
                fromId: userId,
            },
            include: {
                model: User,
                attributes: {
                    exclude: ['email', 'password'],
                },
            },
        });
        res.status(200).json({ request });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
