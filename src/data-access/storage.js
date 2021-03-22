import path from 'path';
import fs from 'fs';
import multer from 'multer';
import { v4 } from 'uuid';

const createUploadDirectory = async (userId, chatId, callback) => {
    let chatIdStr;
    if (chatId === undefined) {
        chatIdStr = 'photos';
    } else {
        chatIdStr = chatId;
    }
    const userDir = path.join('.', 'data-access', 'uploads', userId, chatIdStr);

    fs.stat(userDir, async (error) => {
        if (error) {
            fs.mkdirSync(userDir, { recursive: true });
            callback(userDir);
            return;
        }
        callback(userDir);
    });
};

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
    cb(null, true);
};

export const uploadImage = multer({
    storage,
    fileFilter: imageFilter,
    limits: { fileSize: 2048 * 2048 },
}).single('image');

export const uploadFile = multer({
    storage: fileStorage,
}).single('file');

export default { uploadImage, uploadFile };
