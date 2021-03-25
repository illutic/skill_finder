import User from '../models/User.js';
import Skill from '../models/Skill.js';
import hashPassword from '../utils/hashPassword.js';
import checkPassword from '../utils/checkPassword.js';
import removeToken from '../utils/removeToken.js';

/** Get Current (Logged In) User Data */
export const getCurrentUser = async (req, res) => {
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

/** Get User Data
 * @param {uuid} userId - Requires a user Id in the request url.
 */
export const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            throw Error('No user ID provided.');
        }
        const user = await User.findOne({
            where: { id: req.params.id },
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
 * @param {string} email - Requires an email address in the request body.
 * @param {string} password - Requires a password in the request body.
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
        User.update(
            {
                email,
            },
            {
                where: {
                    id: userId,
                },
            }
        );
        res.status(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Update Password
 * @param {string} password - Requires a password string in the request body
 * @param {string} confirmPassword - Requires a password confirmation string in the request body
 */
export const patchPassword = async (req, res) => {
    try {
        const { userId } = req;
        const { password, confirmPassword } = req.body;
        if (!password) {
            throw Error('No old password provided.');
        }
        await checkPassword(userId, confirmPassword);
        const user = await User.findOne({
            where: { id: userId },
        });
        user.update({
            password: await hashPassword(password),
        });
        res.status(200).json({ message: user });
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
            throw Error('No title provided.');
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
 * @param {string} description - Requires a description string in the request body.
 */
export const patchDescription = async (req, res) => {
    try {
        const { userId } = req;
        const { description } = req.body;
        if (!description) {
            throw Error('No description provided');
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
         * [X] remove token
         * [X] destroy database entity
         */
        const { userId } = req;
        const { password } = req.body;
        await checkPassword(userId, password);
        User.destroy({ where: { id: userId } });
        removeToken(res);
        res.status(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
