import { Router } from 'express';
import {
    signUp,
    logIn,
    logOut,
    check,
} from '../controllers/auth-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.post('/auth/signup', signUp);
router.post('/auth/login', logIn);
router.get('/auth/logout', logOut);
router.get('/auth/check', auth, check);

export default router;
