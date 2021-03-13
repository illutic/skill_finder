import sequelize from 'sequelize';
import User from '../models/User.js';
import Photo from '../models/Photo.js';
import Skill from '../models/Skill.js';
import Request from '../models/Request.js';
import Notification from '../models/Notification.js';
import checkPassword from '../utils/checkPassword.js';
import removeToken from '../utils/removeToken.js';
import hashPassword from '../utils/hashPassword.js';

const { Op } = sequelize;

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
        const { userId } = req;
        const notification = await Notification.findAll({
            where: {
                UserId: userId,
            },
            include: {
                model: User,
                attributes: {
                    exclude: ['email', 'password'],
                },
            },
        });
        res.status(200).json({ notification });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getRequests = async (req, res) => {
    try {
        const { userId } = req;
        const request = await Request.findAll({
            where: {
                [Op.or]: [{ toId: userId }, { fromId: userId }],
            },
            include: {
                model: User,
                attributes: {
                    exclude: ['email', 'password'],
                },
            },
        });
        res.status(200).json({ request });
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
        res.status(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const patchPassword = async (req, res) => {
    try {
        const { userId } = req;
        const { password } = req.body;
        const user = await User.findOne({
            where: { id: userId },
        });
        await user.update({
            password: await hashPassword(password),
        });
        res.status(200).json({ message: user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const patchTitle = async (req, res) => {
    try {
        const { userId } = req;
        const { title } = req.body;
        const user = await User.findOne({
            where: { id: userId },
        });
        await user.update({
            title,
        });
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const patchDescription = async (req, res) => {
    try {
        const { userId } = req;
        const { description } = req.body;
        const user = await User.findOne({
            where: { id: userId },
        });
        await user.update({
            description,
        });
        res.status(200).json({ message: user });
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
        removeToken(res);
        res.status(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
