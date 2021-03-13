/** @module auth
 * This module authenticates the user based on their cookies.
 */
import authOrigin from './authOrigin.js';
import authGoogle from './authGoogle.js';

/** User authentication from cookies,
 *  @param {Request} req - HTTP Request
 * @param {Response} res - HTTP Response
 * @param {Function} next - Function Callback
*/
const auth = async (req, res, next) => {
    const originToken = req.cookies.origin;
    const googleToken = req.cookies.google;
    if (originToken || googleToken) {
        /** Verify Token */
        const authCheck = originToken
            ? await authOrigin(originToken)
            : await authGoogle(googleToken);
        if (!authCheck) {
            res.status(401).send({ error: 'Invalid token.' });
            return;
        }

        req.userId = authCheck.userId;
        next();
    } else {
        res.status(401).send({ error: 'No token provided.' });
    }
};

export default auth;
