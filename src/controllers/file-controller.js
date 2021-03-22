import fs from 'fs';
import path from 'path';
import User from '../models/User.js';
import { uploadImage, uploadFile } from '../data-access/storage.js';
import File from '../models/File.js';

/** Post / Update Photo
 *  @param {string} photoType - Requires a phototype url parameter (profilePhoto or backgroundPhoto)
 *  @param {image} image - Requires an 'image' string key and an image file as a value. Eg. .append('image', imageFile)
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

/** Remove Photo
 *  @param {string} photoType - Requires a phototype url parameter (profilePhoto or backgroundPhoto)
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

/** Get File
 * @param {URL} photoURI - Requires the uri of the photo in the request url.
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

/** Uploads any file to the user's upload folder
 *  @param {String} chatId - Requires a chatId field in the request body! (otherwise it defaults to a photos folder) (append('chatId', chatId))
 *  @param {file} file - the file to be uploaded. (append('file',file))
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
            const databaseFile = await File.create({
                uri: `/${req.file.path}`,
                ChatId: chatId,
            });
            res.send(databaseFile);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });
};

/** Remove File
 * @param {UUID} fileId - Requires the ID of the file to be removed, in the request body.
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

/** Get File
 * @param {URL} fileURI - Requires the uri of the file in the request url.
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
