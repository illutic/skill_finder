import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import CLIENT_ID from '../constants/client-id.js';

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
        return { userId: user[0].id };
    } catch (err) {
        return { error: err };
    }
};

export default authGoogle;
