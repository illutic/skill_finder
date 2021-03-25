import Request from '../models/Request.js';

/** Deny a request.
 *  @param {requestId} - The request Id that is denied.
 */
export const denyRequest = async (req, res) => {
    try {
        const { requestId } = req.body;
        if (!requestId) {
            throw Error('Now request ID provied.');
        }
        const request = await Request.findOne({
            where: { id: requestId },
        });
        if (!request) {
            throw Error('Could not deny request as it does not exist.');
        }
        request.pending = false;
        await request.save();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

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
