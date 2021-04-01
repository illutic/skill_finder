/** @module FileController */
import fs from 'fs';
import path from 'path';
import User from '../models/User.js';
import File from '../models/File.js';
import { uploadImage, uploadFile } from '../data-access/storage.js';

/** Post photo - updates (or adds new) currently logged in user's photo. It is meant to operate on protected routes only.
 *  @param {string} photoType - requires photoType URL parameter equal to 'profilePhoto' or 'backgroundImage'.
 */
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
            const { photoType } = req.params;
            const user = await User.findOne({
                where: { id: userId },
            });
            const oldPhoto = user[photoType];
            if (oldPhoto) {
                fs.unlink(oldPhoto, () => {});
            }
            await user.update({
                [photoType]: `/${req.file.path}`,
            });
            res.sendStatus(200);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });
};

/** Remove photo - removes currently logged in user's photo. It is meant to operate on protected routes only.
 *  @param {string} photoType - requires photoType URL parameter equal to 'profilePhoto' or 'backgroundImage'
 */
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

/** Get photo - responds with a photo (profile, background) of a particular user defined by the user ID.
 * @param {uuid} userId - requires a user ID passed as URL parameter. The URL is, in fact, a URI pointing at the photo resource.
 * @param {string} photoName - requires a photo name passed as URL parameter.
 */
export const getPhoto = async (req, res) => {
    try {
        const { userId, photoName } = req.params;
        res.sendFile(
            path.join(
                process.env.PWD,
                'data-access',
                'uploads',
                'users',
                userId,
                photoName
            )
        );
    } catch (err) {
        res.status(400).json({
            error: 'Could not find photo as it does not exist.',
        });
    }
};

/** Post file - uploads any file to a chat directory. It is meant to operate on protected routes only.
 *  @param {String} chatId - requires a chat ID passed in the request body.
 *  @param {file} file - requires a file attached to the request itself (it should be done automatically by multer package).
 */
export const postFile = async (req, res) => {
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

            const fileName = req.file.path.split(/[\\/]/).pop();
            const databaseFile = await File.create({
                fileName,
                uri: `${req.file.path}`,
                ChatId: chatId,
            });
            res.send(databaseFile);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });
};

/** Remove file - removes a particular file based on the file ID. It is meant to operate on protected routes only.
 * @param {UUID} fileId - requires the ID of the file to be removed passed in the request body.
 */
export const removeFile = async (req, res) => {
    const { fileId } = req.body;
    const file = File.findOne({
        where: {
            id: fileId,
        },
    });
    if (file) {
        fs.unlink((await file).get('uri'), async () => {
            (await file).destroy();
            res.sendStatus(200);
        });
        return;
    }
    res.status(400).json({
        error: 'Could not remove file as it does not exist.',
    });
};

/** Get file - responds with a file uploaded by a particular user defined by the user ID to a particular chat defined by the chat ID.
 * @param {uuid} chatId - requires a chat ID passed as URL parameter. The URL is, in fact, a URI pointing at the file resource.
 * @param {uuid} userId - requires a chat ID passed as URL parameter.
 * @param {string} fileName - requires a file name passed as URL parameter.
 */
export const getFile = async (req, res) => {
    try {
        const { chatId, userId, fileName } = req.params;
        res.sendFile(
            path.join(
                process.env.PWD,
                'data-access',
                'uploads',
                'chats',
                chatId,
                userId,
                fileName
            )
        );
    } catch (err) {
        res.status(400).json({
            error: 'Could not find file as it does not exist.',
        });
    }
};

/** Get files - responds with data (IDs, URIs) of all files uploaded to a particular chat defined by the chat ID. It is meant to operate on protected routes only.
 * @param {uuid} chatId - requires a chat ID passed as URL parameter.
 */
export const getFiles = async (req, res) => {
    try {
        const { chatId } = req.params;
        const files = await File.findAll({
            where: { ChatId: chatId },
        });
        res.send(files);
    } catch (err) {
        res.status(400).json({
            error: 'Could not find files. ',
        });
    }
};
