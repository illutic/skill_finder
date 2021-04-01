/** @module AuthMiddleware */
import authOrigin from './auth-origin.js';
import authGoogle from './auth-google.js';

/** Authenticate users based on their cookies
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
        if (!authCheck || authCheck.error) {
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
