/** @module FileStorage */
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { v4 } from 'uuid';

/** Creates a user upload directory if it doesn't exist.
 * @param {string} userId - the user the directory is for.
 * @param {string} chatId - can be undefined, defaults to photos directory.
 * @param {function} callback - a callback function that is executed after creating the directory.
 */
const createUploadDirectory = async (userId, chatId, callback) => {
    let userDir;
    if (!chatId) {
        userDir = path.join('.', 'data-access', 'uploads', 'users', userId);
    } else {
        userDir = path.join(
            '.',
            'data-access',
            'uploads',
            'chats',
            chatId,
            userId
        );
    }
    fs.stat(userDir, async (error) => {
        if (error) {
            fs.mkdirSync(userDir, { recursive: true });
            callback(userDir);
            return;
        }
        callback(userDir);
    });
};

/** Creates a multer storage specifically for images.
 * @param {object} req - content-type must be of: 'multipart/form-data'.
 * @param {file} file - the file information included in the Request parameter.
 * @param {function} cb - callback function to be called when the file operation is complete.
 */
const storage = multer.diskStorage({
    destination(req, file, cb) {
        createUploadDirectory(req.userId, req.body.chatId, (userDir) => {
            cb(null, userDir);
        });
    },
    filename(req, file, cb) {
        cb(null, `${v4() + path.extname(file.originalname)}`);
    },
});

/** Creates a multer storage for any files.
 * @param {object} req - content-type must be of: 'multipart/form-data'.
 * @param {file} file - the file passed by Multer middleware.
 * @param {function} cb - a callback function to be called when the file operation is complete.
 */
const fileStorage = multer.diskStorage({
    destination(req, file, cb) {
        createUploadDirectory(req.userId, req.body.chatId, (userDir) => {
            cb(null, userDir);
        });
    },
    filename(req, file, cb) {
        cb(null, `${file.originalname}`);
    },
});

const imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError =
            'Only image files are allowed (.jpg, .jpeg, .png, .gif).';
        return cb('Only image files are allowed.');
    }
    return cb(null, true);
};

/** Creates multer middleware for parsing incoming images. */
export const uploadImage = multer({
    storage,
    fileFilter: imageFilter,
    limits: { fileSize: 2048 * 2048 },
}).single('image');

/** Creates multer middleware for parsing incoming binary files. */
export const uploadFile = multer({
    storage: fileStorage,
}).single('file');

export default { uploadImage, uploadFile };
