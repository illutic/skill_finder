import { Router } from 'express';
import { getNotifications } from '../controllers/notification-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/notifications', auth, getNotifications);

export default router;
