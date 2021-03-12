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

router.post('/chat', auth, createChat);
router.post('/:chatId/message', auth, postMessage);
router.post('/:chatId/file', auth, postFile);
router.delete('/:chatId', auth, deleteChat);

export default router;
