import Request from '../models/Request.js';

/** Accept a request.
 *  Get all pending requests of the user.
 */
export const getRequests = async (req, res) => {
    try {
        const { userId } = req;
        const requests = await Request.findAll({
            where: {
                toId: userId,
            },
        });
        // We need to find a way to include user with id = request.fromId
        // to each request object.
        res.status(200).json(requests);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const placeholder = true;
