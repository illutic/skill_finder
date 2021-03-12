import User from '../models/User.js';
import Photo from '../models/Photo.js';
import Skill from '../models/Skill.js';
import checkPassword from '../utils/checkPassword.js';

export const getUser = async (req, res) => {
    const userId = req.params.id;
    if (!userId) {
        res.status(400).json({ error: 'No user ID provided.' });
        return;
    }
    try {
        const user = await User.findOne({
            where: { id: req.params.id },
            include: [Photo, Skill],
            attributes: {
                exclude: ['email', 'password'],
            },
        });
        if (!user) {
            res.status(400).json({ error: 'Incorrect user ID.' });
            return;
        }
        res.json({ user });
    } catch (err) {
        res.json({ error: err.message });
    }
};

export const patchEmail = async (req, res) => {
    const { userId, email, password } = req.body;
    const emailRegExp = new RegExp(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    );
    if (!userId) {
        res.status(400).json({ error: 'No user ID provided.' });
        return;
    }
    if (!email || !emailRegExp.test(email)) {
        res.status(400).json({
            error: 'Please enter a valid email address.',
        });
        return;
    }
    if (userId !== req.userId) {
        res.status(401).json({ error: 'Unauthorised.' });
        return;
    }
    try {
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

export const deleteAccount = async (req, res) => {
    const { userId, password } = req.body;
    if (!userId) {
        res.status(400).json({ error: 'No user ID provided.' });
        return;
    }
    if (userId !== req.userId) {
        res.status(401).json({ error: 'Unauthorised.' });
        return;
    }
    try {
        await checkPassword(userId, password);
        await User.destroy({ where: { id: userId } });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
