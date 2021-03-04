import { Router } from 'express';
import { logIn, signUp } from '../controllers/auth-controller.js';

const router = Router();

router.post('/auth/login', logIn);
router.post('/auth/signup', signUp);

export default router;
