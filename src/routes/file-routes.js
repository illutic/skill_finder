import { Router } from 'express';
import {
    postFile,
    removeFile,
    getFile,
} from '../controllers/file-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.post('/file', auth, postFile);
router.delete('/file', auth, removeFile);
router.get('/file', auth, getFile);

export default router;
