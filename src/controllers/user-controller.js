import fs from 'fs';
import User from '../models/User.js';
import Photo from '../models/Photo.js';
import Skill from '../models/Skill.js';
import hashPassword from '../utils/hashPassword.js';
import checkPassword from '../utils/checkPassword.js';
import removeToken from '../utils/removeToken.js';
import uploadImage from '../data-access/storage.js';

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
        const user = await User.findOne({
            where: {
                id: userId,
            },
        });
        const notifications = await user.getNotifications();
        res.status(200).json({ notifications });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Update Email */
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

/** Update Password */
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
        await user.update({
            password: await hashPassword(password),
        });
        res.status(200).json({ message: user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Update Title */
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
        await user.update({
            title,
        });
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
/** Update Description */
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
        await user.update({
            description,
        });
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

/** Get Photo */
export const getPhoto = async (req, res) => {
    const { userId } = req;
    const photo = await Photo.findOne({
        where: { type: req.params.type, UserId: userId },
    });
    res.send(photo);
};

/** Remove Photo */
export const removePhoto = async (req, res) => {
    const { userId } = req;
    const photo = await Photo.findOne({
        where: { type: req.params.type, UserId: userId },
    });
    if (photo !== null) {
        await fs.unlink(photo.get('uri'), async () => {
            await photo.destroy();
        });
    }

    res.send(photo);
};

/** Post / Update Photo */
export const postPhoto = async (req, res) => {
    uploadImage(req, res, async (fileError) => {
        try {
            if (req.fileValidationError) {
                throw Error(req.fileValidationError);
            }
            if (!req.file) {
                throw Error('Please select an image to upload.');
            }
            if (fileError) {
                throw Error(fileError);
            }
            const { userId } = req;
            const imgType = req.params.type;
            const user = await User.findOne({
                where: { id: userId },
            });
            const oldImg = await user.getPhotos({
                where: { type: imgType },
            });
            if (oldImg.length) {
                /* < Remove old image from the file system > */
                await oldImg[0].destroy();
            }
            const newPhoto = await Photo.create({
                uri: req.file.path,
                type: imgType,
            });
            await user.addPhoto(newPhoto);
            res.sendStatus(200);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });
};

/** Delete Account */
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
