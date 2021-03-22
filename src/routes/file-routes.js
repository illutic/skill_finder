import { Router } from 'express';
import { postFile } from '../controllers/file-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.post('/file', auth, postFile);

export default router;
