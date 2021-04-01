/** @module AuthMiddleware */
import jwt from 'jsonwebtoken';

/** Verify user's token and return the userID.
 * @param {string} token - JWT authentication token
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
