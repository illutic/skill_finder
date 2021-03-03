import { Router } from 'express';
import { getUser } from '../controllers/api-controller.js';

const router = Router();

router.get('/api/user', getUser);

export default router;
