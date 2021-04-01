/** @module AuthMiddleware */
import authOrigin from './auth-origin.js';
import authGoogle from './auth-google.js';

/** Auth middleware - authenticates users based on their cookies. Acts as the main authentication middleware component. Use on any route that should be accessed by authenticated and authorised users only.
 *  @param {Request} req - HTTP Request
 * @param {Response} res - HTTP Response
 * @param {Function} next - Function Callback
 */
const auth = async (req, res, next) => {
    const originToken = req.cookies.origin;
    const googleToken = req.cookies.google;
    if (originToken || googleToken) {
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
