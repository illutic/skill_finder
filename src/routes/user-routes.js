import { Router } from 'express';
import {
    getUser,
    getNotifications,
    getRequests,
    patchEmail,
    patchPassword,
    patchTitle,
    patchDescription,
    deleteAccount,
} from '../controllers/user-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/user/:id', getUser);
router.get('/notifications', auth, getNotifications);
router.get('/requests', auth, getRequests);
router.patch('/user/email', auth, patchEmail);
router.patch('/user/password', auth, patchPassword);
router.patch('/user/title', auth, patchTitle);
router.patch('/user/description', auth, patchDescription);
router.delete('/user/account', auth, deleteAccount);

export default router;
