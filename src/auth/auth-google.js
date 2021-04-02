/** @module AuthMiddleware */
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import CLIENT_ID from '../constants/client-id.js';

/** Google verification - verifies user's Google token and accesses the Google API. Creates a database entry for non-existing Google users, as this is the only place where Google users are handled independently from other users. Returns the user ID. Used as part of auth middleware components.
 * @param {string} token - Google authentication token
 */
const authGoogle = async (token) => {
    try {
        const client = new OAuth2Client(CLIENT_ID);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const user = await User.findOrCreate({
            where: {
                email: payload.email,
                firstName: payload.given_name,
                lastName: payload.family_name,
                foreign: true,
            },
        });
        if (!user[0].profilePhoto) {
            user[0].profilePhoto = payload.picture;
            user[0].save();
        }
        return { userId: user[0].id };
    } catch (err) {
        return { error: err };
    }
};

export default authGoogle;
