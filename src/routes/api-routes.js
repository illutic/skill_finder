import { Router } from 'express';
import userRoutes from './user-routes.js';
import skillRoutes from './skill-routes.js';
import chatRoutes from './chat-routes.js';
import fileRoutes from './file-routes.js';
import requestRoutes from './request-routes.js';
import notificationRoutes from './notification-routes.js';

const router = Router();

router.use('/api', userRoutes);
router.use('/api', skillRoutes);
router.use('/api', skillRoutes);
router.use('/api', chatRoutes);
router.use('/api', requestRoutes);
router.use('/api', fileRoutes);
router.use('/api', notificationRoutes);

export default router;
