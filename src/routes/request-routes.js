import { Router } from 'express';
import {
    getSentRequests,
    getReceivedRequests,
    postRequest,
    acceptRequest,
    denyRequest,
} from '../controllers/request-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/requests/sent', auth, getSentRequests);
router.get('/requests/received', auth, getReceivedRequests);
router.post('/requests/new', auth, postRequest);
router.post('/requests/accept', auth, acceptRequest);
router.post('/requests/deny', auth, denyRequest);

export default router;
