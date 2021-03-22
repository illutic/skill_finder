import { Router } from 'express';
import { getChatrooms, getMessages } from '../controllers/chat-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/chats', auth, getChatrooms);
router.get('/:chatId/messages', auth, getMessages);

export default router;
