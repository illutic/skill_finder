import User from '../models/User.js';
import Photo from '../models/Photo.js';
import Skill from '../models/Skill.js';
import checkPassword from '../utils/checkPassword.js';

export const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            throw Error('No user ID provided.');
        }
        const user = await User.findOne({
            where: { id: req.params.id },
            include: [Photo, Skill],
            attributes: {
                exclude: ['email', 'password'],
            },
        });
        if (!user) {
            throw Error('Incorrect user ID.');
        }
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getNotifications = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getRequests = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

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
        await checkPassword(userId, password);
        await User.update(
            {
                email,
            },
            {
                where: {
                    id: userId,
                },
            }
        );
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const patchPassword = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const patchTitle = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const patchDescription = async (req, res) => {
    try {
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        const { userId } = req;
        const { password } = req.body;
        await checkPassword(userId, password);
        await User.destroy({ where: { id: userId } });
        res.cookie('origin', '', { maxAge: 1 });
        res.cookie('google', '', { maxAge: 1 });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
