/** @module AuthController */
import bcrypt from 'bcrypt';
import validateAuthForm from '../utils/validateAuthForm.js';
import User from '../models/User.js';
import hashPassword from '../utils/hashPassword.js';
import createToken from '../utils/createToken.js';
import removeToken from '../utils/removeToken.js';
import FORM_TYPES from '../constants/form-types.js';
import AUTH_EXPIRY from '../constants/auth-expiry.js';

/** Signup controller function - uses the data provided in the request body to register a user.
 * @param {string} firstName - requires a first name string provided in the request body.
 * @param {string} lastName - requires a last name string provided in the request body.
 * @param {string} email - requires an email string provided in the request body.
 * @param {string} password - requires a password string provided in the request body.
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

/** Login controller function - uses the data provided in the request body to log in a user.
 * @param {string} email - requires an email string found in the request body.
 * @param {string} password - requires a password string found in the request body.
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

/** Logout controller function - overwrites current auth cookies with empty, short-lived ones. */
export const logOut = async (req, res) => {
    removeToken(res);
    res.sendStatus(200);
};

/** Auth check controller function - used to quickly check user's auth status without fetching any data. It is meant to operate on protected routes only. */
export const check = async (req, res) => {
    res.sendStatus(200);
};
