import { Router } from 'express';
import { getUser, postUser } from '../controllers/api-controller.js';

const router = Router();

router.get('/api/user', getUser);
router.post('/api/user', postUser);

export default router;
