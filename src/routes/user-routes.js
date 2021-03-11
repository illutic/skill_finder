import { Router } from 'express';
import {
    getUser,
    postUser,
    patchUser,
    deleteUser,
} from '../controllers/user-controller.js';

const router = Router();

router.get('/api/user/:id', getUser);
router.post('/api/user', postUser);
router.patch('/api/user/:id', patchUser);
router.delete('/api/user/:id', deleteUser);

export default router;
