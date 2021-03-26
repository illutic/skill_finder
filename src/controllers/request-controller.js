import Request from '../models/Request.js';

/** Get User Requests */
const getRequests = async (req, res) => {
    try {
        const { userId } = req;
        const requests = await Request.findAll({
            where: {
                toId: userId,
            },
        });
        res.status(200).json(requests);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export default getRequests;
