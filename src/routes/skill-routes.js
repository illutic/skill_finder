import { Router } from 'express';
import {
    getSkill,
    // postSkill,
    // deleteSkill,
} from '../controllers/skill-controller.js';

const router = Router();

router.get('/skill/:name', getSkill);
// router.post('/skill', postSkill);
// router.delete('/skill/:name', deleteSkill);

export default router;
