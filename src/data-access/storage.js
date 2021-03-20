import multer from 'multer';
import path from 'path';
import { v4 } from 'uuid';

export const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './data-access/uploads');
    },
    filename(req, file, cb) {
        cb(null, `${v4() + path.extname(file.originalname)}`);
    },
});

export const imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
};

export const uploadImg = multer({
    storage,
    fileFilter: imageFilter,
    limits: { fileSize: 2048 * 2048 },
}).single('image');

export default { storage, imageFilter, uploadImg };
