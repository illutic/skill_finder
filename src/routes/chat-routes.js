import { Router } from 'express';
import {
    getChatrooms,
    getMessages,
    getFiles,
    postMessage,
    postFile,
    deleteChat,
    createChat
} from '../controllers/chat-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/chats', auth, getChatrooms);
router.get('/:chatId/messages', auth, getMessages);
router.get('/:chatId/files', auth, getFiles);

router.post('/chat', createChat);
router.post('/:chatId/message', postMessage);
router.post('/:chatId/file', postFile);
router.delete('/:chatId', deleteChat);

export default router;
