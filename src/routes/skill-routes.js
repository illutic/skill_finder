import { Router } from 'express';
import {
    getSkill,
    postSkill,
    // deleteSkill,
} from '../controllers/skill-controller.js';
import auth from '../auth/auth.js';

const router = Router();

router.get('/skill/:name', getSkill);
router.post('/skill', auth, postSkill);
// router.delete('/skill/:name', deleteSkill);

export default router;
