/** @module authOrigin
 * Server-side token Authentication */
import jwt from 'jsonwebtoken';

/** Verify user token and return the userID.
 * @param {string} token - An Authentication token
*/
const authOrigin = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
        if (error) {
            return false;
        }
        return { userId: payload.userId };
    });
};

export default authOrigin;
