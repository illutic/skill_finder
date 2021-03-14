import Request from '../models/Request.js';
import User from '../models/User.js';

export const postRequest = async (req, res) => {
    try {
        const { userId } = req;
        const request = await Request.create({
            toId: req.params.toId,
            fromId: userId,
        });
        res.status(200).json({ request });
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
