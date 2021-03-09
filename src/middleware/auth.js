import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';

const auth = async (req, res, next) => {
    const originToken = req.cookies.origin;
    const googleToken = req.cookies.google;
    if (originToken) {
        jwt.verify(originToken, process.env.JWT_SECRET, (error, payload) => {
            if (error) {
                res.status(401).send({ error: 'Invalid token.' });
            }
            req.userId = payload.userId;
            next();
        });
    } else if (googleToken) {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
        try {
            const ticket = await client.verifyIdToken({
                idToken: googleToken,
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
            req.userId = user[0].id;
            next();
        } catch (err) {
            res.status(401).send({ error: 'Invalid token.' });
        }
    } else {
        res.status(401).send({ error: 'No token provided.' });
    }
};

export default auth;
