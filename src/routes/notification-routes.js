import { Router } from 'express';
import {
    getNotifications,
    deleteNotification,
} from '../controllers/notification-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/notifications', auth, getNotifications);
router.delete('/notifications', auth, deleteNotification);

export default router;
