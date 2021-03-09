import jwt from 'jsonwebtoken';
import AUTH_EXPIRY from '../constants/auth-expiry.js';

const createToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: AUTH_EXPIRY.seconds,
    });
};

export default createToken;
