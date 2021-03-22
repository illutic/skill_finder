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
    '/data-access/uploads/chats/:chatId/:userId/:fileName',
    auth,
    getFile
);
router.get('/data-access/uploads/:userId/:photoName', getPhoto);

export default router;
