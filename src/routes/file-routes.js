import { Router } from 'express';
import {
    postFile,
    removeFile,
    getFile,
    getFiles,
    getPhoto,
} from '../controllers/file-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.post('/file', auth, postFile);
router.delete('/file', auth, removeFile);
router.get(
    '/data-access/uploads/chats/:chatId/:userId/:fileName',
    auth,
    getFile
);
router.get('/file/getAll/:chatId', auth, getFiles);
router.get('/data-access/uploads/users/:userId/:photoName', getPhoto);

export default router;
