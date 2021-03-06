import { Router } from 'express';
import {
    getUser,
    postUser,
    patchUser,
    deleteUser,
} from '../controllers/api-controller.js';

const router = Router();

router.get('/api/user/:id', getUser);
router.post('/api/user', postUser);
router.patch('/api/user/update/:id', patchUser);
router.delete('/api/user/delete/:id', deleteUser);

export default router;
