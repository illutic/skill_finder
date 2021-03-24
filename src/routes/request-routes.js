import { Router } from 'express';
import {
    getRequests,
    postRequest,
    acceptRequest,
    denyRequest,
} from '../controllers/request-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/requests/', auth, getRequests);
router.post('/requests/new', auth, postRequest);
router.post('/requests/accept', auth, acceptRequest);
router.post('/requests/deny', auth, denyRequest);

export default router;
