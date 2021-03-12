import { Router } from 'express';
import {
    getUser,
    patchEmail,
    deleteAccount,
} from '../controllers/user-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/user/:id', getUser);
router.patch('/user/email', auth, patchEmail);
router.delete('/user/account', auth, deleteAccount);

export default router;
