import { Router } from 'express';
import {
    getCurrentUser,
    getUser,
    patchEmail,
    patchPassword,
    patchTitle,
    patchDescription,
    deleteAccount,
} from '../controllers/user-controller.js';
import { postPhoto, removePhoto } from '../controllers/file-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/user/:id', getUser);
router.get('/user', auth, getCurrentUser);
router.delete('/user/photo/:photoType', auth, removePhoto);
router.post('/user/photo/:photoType', auth, postPhoto);
router.patch('/user/email', auth, patchEmail);
router.patch('/user/password', auth, patchPassword);
router.patch('/user/title', auth, patchTitle);
router.patch('/user/description', auth, patchDescription);
router.delete('/user/account', auth, deleteAccount);

export default router;
