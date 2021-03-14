import { Router } from 'express';
import * as reqControl from '../controllers/request-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/requests/sent', auth, reqControl.getSentRequests);
router.get('/requests/received', auth, reqControl.getReceivedRequests);
router.post('/requests/:toId', auth, reqControl.postRequest);

export default router;
