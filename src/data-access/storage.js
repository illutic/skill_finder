import path from 'path';
import multer from 'multer';
import { v4 } from 'uuid';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        const directory = path.join('.', 'data-access', 'uploads', req.userId);
        cb(null, directory);
    },
    filename(req, file, cb) {
        cb(null, `${v4() + path.extname(file.originalname)}`);
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
    storage,
}).single('file');

export default { uploadImage, uploadFile };
