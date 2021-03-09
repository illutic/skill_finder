import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';

const authGoogle = async (token) => {
    try {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT,
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
        return false;
    }
};

export default authGoogle;
