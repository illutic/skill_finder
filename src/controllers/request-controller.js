import Chat from '../models/Chat.js';
import Request from '../models/Request.js';
import User from '../models/User.js';

export const postRequest = async (req, res) => {
    try {
        const { userId } = req;

        let request = await Request.findOne({
            where: { toId: req.body.toId, fromId: userId },
        });

        if (request === null) {
            request = await Request.create({
                toId: req.body.toId,
                fromId: userId,
            });
        }
        res.status(200).json({ request });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const denyRequest = async (req, res) => {
    try {
        const { requestId } = req.body;
        await Request.destroy({
            where: { id: requestId },
        });
        res.status(200).json('Request Denied.');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const acceptRequest = async (req, res) => {
    try {
        const { requestId } = req.body;
        const request = await Request.findOne({
            where: { id: requestId },
        });
        const teacher = await User.findOne({ where: { id: request.toId } });
        const student = await User.findOne({ where: { id: request.fromId } });
        const chat = await Chat.create();
        chat.addUser(teacher);
        chat.addUser(student);
        await request.destroy();
        res.status(200).json('Request Accepted');
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
