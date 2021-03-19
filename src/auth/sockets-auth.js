/** @module auth */
/** This module authenticates the user based on their cookies. */
import authOrigin from './auth-origin.js';
import authGoogle from './auth-google.js';

/** User authentication from cookies,
 *  @param {Cookies} cookies - the list of cookies received from the socket header
 */
const auth = async (cookies) => {
    const originToken = cookies.origin;
    const googleToken = cookies.google;
    if (originToken || googleToken) {
        /** Verify Token */
        const authCheck = originToken
            ? await authOrigin(originToken)
            : await authGoogle(googleToken);
        return authCheck.userId;
    }
    throw Error('Invalid Token');
};

export default auth;
