import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const getUser = async (req, res) => {
    const userId = req.params.id;
    if (!userId) {
        res.json({ error: 'No user ID provided.' });
        return;
    }
    try {
        const {
            id,
            firstName,
            lastName,
            title,
            description,
            type,
        } = await User.findOne({
            where: { id: req.params.id },
        });
        res.json({
            id,
            firstName,
            lastName,
            title,
            description,
            type,
        });
    } catch (err) {
        res.json({ error: 'Incorrect user ID.' });
    }
};

export const patchEmail = async (req, res) => {
    const { userId, newEmail, password } = req.body;
    const emailRegExp = new RegExp(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
    );
    if (!userId) {
        res.status(400).json({ error: 'No user ID provided.' });
        return;
    }
    if (!newEmail || !emailRegExp.test(newEmail)) {
        res.status(400).json({
            error: 'Please enter a valid email address.',
        });
        return;
    }
    if (!password) {
        res.status(400).json({ error: 'No password provided.' });
        return;
    }
    try {
        const user = await User.findOne({
            where: {
                id: userId,
            },
        });
        if (!user) {
            res.status(400).json({ error: 'Incorrect user ID.' });
            return;
        }
        const passwordCorrect = await bcrypt.compare(password, user.password);
        if (!passwordCorrect) {
            res.status(401).json({ error: 'Incorrect password.' });
            return;
        }
        user.email = newEmail;
        await user.save();
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: '' });
    }
};

export const deleteUser = async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({ error: 'No user ID provided.' });
        return;
    }
    if (req.params.id !== req.userId) {
        res.status(401).json({ error: 'Unauthorised.' });
    }
    try {
        await User.destroy({ where: { id: req.params.id } });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json({ error: 'Incorrect user ID.' });
    }
};
