/** @module authGoogle */
/** Google Authentication */
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import CLIENT_ID from '../constants/client-id.js';

/** Exchange token to access the Google API and get an email address, and the full name of the user.
 * @param {string} token - An Authentication token
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
