import path from 'path';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        const directory = path.join('.', 'data-access', 'uploads');
        cb(null, directory);
    },
    filename(req, file, cb) {
        const extension = path.extname(file.originalname);
        cb(null, uuidv4() + extension);
    },
});

const imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed.';
        cb(new Error('Only image files are allowed.'));
    }
    cb(null, true);
};

const uploadImage = multer({
    storage,
    fileFilter: imageFilter,
    limits: { fileSize: 2048 * 2048 },
}).single('image');

export default uploadImage;
