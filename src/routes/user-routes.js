import { Router } from 'express';
import {
    getUser,
    postUser,
    patchUser,
    deleteUser,
} from '../controllers/user-controller.js';

const router = Router();

router.get('/user/:id', getUser);
router.post('/user', postUser);
router.patch('/user/:id', patchUser);
router.delete('/user/:id', deleteUser);

export default router;
