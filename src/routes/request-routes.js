import { Router } from 'express';
import { getRequests, denyRequest } from '../controllers/request-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/requests', auth, getRequests);
router.post('/requests/deny', auth, denyRequest);

export default router;
