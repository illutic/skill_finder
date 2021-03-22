import { Router } from 'express';
import {
    postFile,
    removeFile,
    getFile,
    getPhoto,
} from '../controllers/file-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.post('/file', auth, postFile);
router.delete('/file', auth, removeFile);
router.get(
    '/file/data-access/uploads/chats/:chatId/:userId/:fileName',
    auth,
    getFile
);
router.get(
    '/photo/data-access/uploads/photos/:userId/:photoName',
    auth,
    getPhoto
);

export default router;
