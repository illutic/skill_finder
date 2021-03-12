import { Router } from 'express';
import {
    getChatrooms,
    getMessages,
    getFiles,
} from '../controllers/chat-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.post('/chat', auth, getChatrooms);
router.post('/chat/messages', auth, getMessages);
router.post('/chat/files', auth, getFiles);

export default router;
