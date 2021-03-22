import fs from 'fs';
import path from 'path';
import User from '../models/User.js';
import { uploadImage, uploadFile } from '../data-access/storage.js';
import File from '../models/File.js';

const createUploadDirectory = async (userId) => {
    const userDir = path.join('.', 'data-access', 'uploads', userId);
    fs.stat(userDir, async (error) => {
        if (error) {
            await fs.mkdir(userDir);
        }
    });
};

/** Post / Update Photo */
export const postPhoto = async (req, res) => {
    createUploadDirectory(req.userId);
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
            const { photoType } = req.params;
            const user = await User.findOne({
                where: { id: userId },
            });
            const oldPhoto = user[photoType];
            if (oldPhoto) {
                fs.unlink(oldPhoto, () => {});
            }
            user.update({
                [photoType]: req.file.path,
            });
            res.sendStatus(200);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });
};

/** Remove Photo */
export const removePhoto = async (req, res) => {
    const { userId } = req;
    const { photoType } = req.params;
    const user = await User.findOne({
        where: { id: userId },
    });
    const photo = user[photoType];
    if (photo) {
        fs.unlink(photo, async () => {
            user.update({
                [photoType]: null,
            });
            res.sendStatus(200);
        });
        return;
    }
    res.status(400).json({
        error: 'Could not remove photo as it does not exist.',
    });
};

export const postFile = async (req, res) => {
    createUploadDirectory(req.userId);
    uploadFile(req, res, async (fileError) => {
        try {
            if (req.fileValidationError) {
                throw Error(req.fileValidationError);
            }
            if (!req.file) {
                throw Error('Please select a file to upload.');
            }
            if (fileError) {
                throw Error(fileError);
            }
            const { chatId } = req.body;
            const databaseFile = File.create({
                uri: req.file.path,
                ChatId: chatId,
            });

            res.sendStatus(200);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });
};
