import User from '../models/User.js';
import Skill from '../models/Skill.js';
import encodeEmail from '../utils/encodeEmail.js';
import hashPassword from '../utils/hashPassword.js';
import checkPassword from '../utils/checkPassword.js';
import removeToken from '../utils/removeToken.js';

/** Get Current User Data */
export const getCurrentUser = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findOne({
            where: {
                id: userId,
            },
            include: Skill,
            attributes: {
                exclude: ['password'],
            },
        });
        if (!user) {
            throw Error('Oops! Something went wrong.');
        }
        user.email = encodeEmail(user.email);
        res.json(user);
    } catch (err) {
        res.json({ error: err.message });
    }
};

/** Get Any User Data
 * @param {uuid} userId - Requires user ID passed as URL parameter.
 */
export const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            throw Error('No user ID provided.');
        }
        const user = await User.findOne({
            where: { id: userId },
            include: Skill,
            attributes: {
                exclude: ['email', 'password'],
            },
        });
        if (!user) {
            throw Error('Incorrect user ID.');
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Update Email
 * @param {string} email - Requires an email address passed in the request body.
 * @param {string} password - Requires a password passed in the request body.
 */
export const patchEmail = async (req, res) => {
    try {
        const { userId } = req;
        const { email, password } = req.body;
        const emailRegExp = new RegExp(
            /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
        );
        if (!email || !emailRegExp.test(email)) {
            throw Error('Please enter a valid email address.');
        }
        if (!password) {
            throw Error('No password provided.');
        }
        await checkPassword(userId, password);
        const existingUser = await User.findOne({
            where: {
                email,
            },
        });
        if (existingUser) {
            throw Error('This e-mail address is already in use.');
        }
        const user = await User.findOne({
            where: {
                id: userId,
            },
        });
        user.email = email;
        user.save();
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Update Password
 * @param {string} password - Requires a new password passed in the request body.
 * @param {string} confirmPassword - Requires an old password passed in the request body.
 */
export const patchPassword = async (req, res) => {
    try {
        const { userId } = req;
        const { password, confirmPassword } = req.body;
        if (!password) {
            throw Error('Please enter your new password.');
        }
        if (password.length < 6) {
            throw Error('Your password must be at least 6 characters long.');
        }
        if (!confirmPassword) {
            throw Error('Please confirm your old password');
        }
        await checkPassword(userId, confirmPassword);
        const user = await User.findOne({
            where: { id: userId },
        });
        user.password = await hashPassword(password);
        user.save();
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Update Title
 * @param {string} title - Requires a title string in the request body
 */
export const patchTitle = async (req, res) => {
    try {
        const { userId } = req;
        const { title } = req.body;
        if (!title) {
            throw Error('Please enter your new title.');
        }
        if (title.length > 35) {
            throw Error(
                'Your new title cannot not be longer than 35 characters.'
            );
        }
        const user = await User.findOne({
            where: { id: userId },
        });
        user.update({
            title,
        });
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Update Description
 * @param {string} description - Requires a new description passed in the request body.
 */
export const patchDescription = async (req, res) => {
    try {
        const { userId } = req;
        const { description } = req.body;
        if (!description) {
            throw Error('Please enter your new description.');
        }
        if (description.length > 500) {
            throw Error(
                'Your new description cannot not be longer than 500 characters.'
            );
        }
        const user = await User.findOne({
            where: { id: userId },
        });
        user.update({
            description,
        });
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Delete Account */
export const deleteAccount = async (req, res) => {
    try {
        /** TODO
         * [ ] destroy all m:n table entities related to user
         * [ ] destroy any requests linked to user
         * [ ] remove uploaded files
         * [ ] remove chats
         * [ ] remove skills
         * [X] remove token
         * [X] destroy database entity
         */
        const { userId } = req;
        const { confirmPhrase, confirmPassword } = req.body;
        if (!confirmPhrase || confirmPhrase !== 'Delete account') {
            throw Error('Please type "Delete account" to continue.');
        }
        if (!confirmPassword) {
            throw Error('Please confirm your password.');
        }
        await checkPassword(userId, confirmPassword);
        User.destroy({ where: { id: userId } });
        removeToken(res);
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
