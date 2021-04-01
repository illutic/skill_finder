import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import AuthRoutes from './routes/auth-routes.js';
import APIRoutes from './routes/api-routes.js';
import FileRoutes from './routes/file-routes.js';

/** Define local constants */
const DIRNAME = process.env.PWD ?? '';

/** Create Express application */
const app = express();

/** Set up middleware */
app.use(express.json());
app.use(cookieParser());

/** Install routes */
app.use(AuthRoutes);
app.use(APIRoutes);
app.use(FileRoutes);

/** Serve static files */
app.use(express.static(path.join(DIRNAME, 'client', 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(DIRNAME, 'client', 'build', 'index.html'));
});

export default app;
