import Chat from '../models/Chat.js';
import Request from '../models/Request.js';
import User from '../models/User.js';

/** Post a request to a user.
 *  @param {toId} - The userId to which the request is for.
 */
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
        res.status(200).json(request[0]);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Deny a request.
 *  @param {requestId} - The request Id that is denied.
 */
export const denyRequest = async (req, res) => {
    try {
        const { requestId } = req.body;
        if (!requestId) {
            throw Error('No request ID provided.');
        }
        await Request.destroy({
            where: { id: requestId },
        });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Accept a request.
 *  @param {requestId} - The request Id that is accepted.
 */
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
        await chat.addUser(teacher);
        await chat.addUser(student);
        await request.destroy();
        res.status(200).json(chat);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Accept a request.
 *  Get all pending requests of the user.
 */
export const getReceivedRequests = async (req, res) => {
    try {
        const { userId } = req;
        const requests = await Request.findAll({
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
        res.status(200).json(requests);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Accept a request.
 *  Get all requests the user has sent.
 */
export const getSentRequests = async (req, res) => {
    try {
        const { userId } = req;
        const requests = await Request.findAll({
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
        res.status(200).json(requests);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
