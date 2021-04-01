/** @module AuthMiddleware */
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import CLIENT_ID from '../constants/client-id.js';

/** Exchange token to access the Google API and get user's credentials.
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
