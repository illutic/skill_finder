import { Router } from 'express';
import { logIn } from '../controllers/auth-controller.js';

const router = Router();

router.post('/login', logIn);

export default router;
