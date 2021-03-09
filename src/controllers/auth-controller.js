import bcrypt from 'bcrypt';
import validateAuthForm from '../utils/validateAuthForm.js';
import User from '../models/User.js';
import hashPassword from '../utils/hashPassword.js';
import FORMS from '../constants/forms.js';

export const signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        validateAuthForm(req.body, FORMS.signup);
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

export const logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        validateAuthForm(req.body, FORMS.login);
        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            throw Error('Incorrect email or password.');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw Error('Incorrect email or password.');
        }
        res.send(user.id);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
};
