import { Router } from 'express';
import { signUp, logIn, logOut } from '../controllers/auth-controller.js';

const router = Router();

router.post('/auth/signup', signUp);
router.post('/auth/login', logIn);
router.get('/auth/logout', logOut);

export default router;
