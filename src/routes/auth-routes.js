import { Router } from 'express';
import { signUp, logIn, logOut } from '../controllers/auth-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.post('/auth/signup', signUp);
router.post('/auth/login', logIn);
router.get('/auth/logout', logOut);
router.get('/auth/check', auth, (req, res) => res.sendStatus(200));

export default router;
