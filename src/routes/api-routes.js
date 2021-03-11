import { Router } from 'express';
import userRoutes from './user-routes.js';
import skillRoutes from './skill-routes.js';

const router = Router();

router.use('/api', userRoutes);
router.use('/api', skillRoutes);

export default router;
