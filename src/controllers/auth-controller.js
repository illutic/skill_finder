import validateSignup from '../utils/validateSignup.js';
import User from '../models/User.js';
import hashPassword from '../utils/hashPassword.js';

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
        res.status(400).send({ error: err.message });
    }
};

export const logIn = (req, res) => {
    const { email, password } = req.body;
    try {
        console.log(email, password);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};
