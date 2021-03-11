import { Router } from 'express';
import {
    getUser,
    postUser,
    patchUser,
    deleteUser,
    getSkill,
    postSkill,
    deleteSkill,
} from '../controllers/api-controller.js';

const router = Router();

router.get('/api/user/:id', getUser);
router.post('/api/user', postUser);
router.patch('/api/user/:id', patchUser);
router.delete('/api/user/:id', deleteUser);

router.get('/skill/:name', getSkill);
router.post('/skill', postSkill);
router.delete('/skill/:name', deleteSkill);
export default router;
