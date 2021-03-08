import validateSignup from '../utils/validateSignup.js';
import User from '../models/User.js';
import hashPassword from '../utils/hashPassword.js';

export const logIn = (req, res) => {
    res.send('👍');
};

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        validateSignup(req.body);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: await hashPassword(password),
        });
        res.send(user);
    } catch (err) {
        res.status(400).send(err.message);
    }
};
