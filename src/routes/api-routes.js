import { Router } from 'express';
import userRoutes from './user-routes.js';
import skillRoutes from './skill-routes.js';

const router = Router();

router.use(userRoutes);
router.use(skillRoutes);

export default router;
