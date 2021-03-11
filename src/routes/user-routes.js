import { Router } from 'express';
import {
    getUser,
    patchEmail,
    deleteUser,
} from '../controllers/user-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/user/:id', getUser);
router.patch('/user', auth, patchEmail);
router.delete('/user/:id', auth, deleteUser);

export default router;
