/** @module AuthMiddleware */
import jwt from 'jsonwebtoken';

/** Origin verification - verifies user's JWT token and returns the user ID. Used as a part of auth middleware components.
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
