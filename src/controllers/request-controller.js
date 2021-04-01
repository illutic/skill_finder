/** @module RequestController */
import sequelize from 'sequelize';
import Request from '../models/Request.js';

const { Op } = sequelize;

/** Get requests - responds with data about requests received by currently logged in user. It sorts the requests into three categories - accepted requests, incoming requests and sent requests. It is meant to operate on protected routes only. */
const getRequests = async (req, res) => {
    try {
        const { userId } = req;
        const acceptedRequests = await Request.findAll({
            where: {
                [Op.or]: [{ toId: userId }, { fromId: userId }],
                accepted: true,
                pending: false,
            },
        });
        const incomingRequests = await Request.findAll({
            where: {
                toId: userId,
                accepted: false,
                pending: true,
            },
        });
        const sentRequests = await Request.findAll({
            where: {
                fromId: userId,
                accepted: false,
                pending: true,
            },
        });
        res.status(200).json({
            acceptedRequests,
            incomingRequests,
            sentRequests,
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export default getRequests;
