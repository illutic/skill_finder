/** @module AuthMiddleware */
import authOrigin from './auth-origin.js';
import authGoogle from './auth-google.js';

/** WebSockets auth - used to authenticate users that sent requests through WebSockets protocol. It's a standalone auth component, independent from the main auth middleware, which only works for HTTP requests.
 *  @param {Cookies} cookies - the list of cookies received from the socket header.
 */
const auth = async (cookies) => {
    const originToken = cookies.origin;
    const googleToken = cookies.google;
    if (originToken || googleToken) {
        const authCheck = originToken
            ? await authOrigin(originToken)
            : await authGoogle(googleToken);
        return authCheck.userId;
    }
    throw Error('Invalid Token');
};

export default auth;
