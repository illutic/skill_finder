/** @module auth-controller */
/** Provides authentication related callback functions. */
import bcrypt from 'bcrypt';
import validateAuthForm from '../utils/validateAuthForm.js';
import User from '../models/User.js';
import hashPassword from '../utils/hashPassword.js';
import createToken from '../utils/createToken.js';
import removeToken from '../utils/removeToken.js';
import FORM_TYPES from '../constants/form-types.js';
import AUTH_EXPIRY from '../constants/auth-expiry.js';

/** Sign Up callback function - Uses the data provided in the request body to register a user.
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 */
export const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        validateAuthForm(req.body, FORM_TYPES.signup);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: await hashPassword(password),
        });
        /** Creates a cookie based on the newly registered user */
        const token = createToken(user.id);
        res.cookie('origin', token, {
            httpOnly: true,
            maxAge: AUTH_EXPIRY.miliseconds,
        });
        res.send(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Log In callback function - Uses the data provided in the request body to login a user.
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 */
export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        validateAuthForm(req.body, FORM_TYPES.login);
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
        const token = createToken(user.id);
        res.cookie('origin', token, {
            httpOnly: true,
            maxAge: AUTH_EXPIRY.miliseconds,
        });
        res.send(user.id);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
/** Log out callback function - Returns an empty cookie
 * @param {Request} req - HTTP REQUEST
 * @param {Response} res - HTTP RESPONSE
 */
export const logOut = async (req, res) => {
    removeToken(res);
    res.sendStatus(200);
};

export const check = async (req, res) => {
    const { userId } = req;
    const user = await User.findOne({
        where: {
            id: userId,
        },
        attributes: {
            exclude: ['email', 'password'],
        },
    });
    res.json(user);
};
