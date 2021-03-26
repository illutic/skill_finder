import { Router } from 'express';
import { getRequests } from '../controllers/request-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/requests', auth, getRequests);

export default router;
