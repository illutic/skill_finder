import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import AuthRoutes from './routes/auth-routes.js';
import APIRoutes from './routes/api-routes.js';

// Constants
const PORT = process.env.PORT ?? 8081;
const DIRNAME = process.env.PWD;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(DIRNAME, 'client', 'build')));

// Routes
app.use(AuthRoutes);
app.use(APIRoutes);

// All Other Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(DIRNAME, 'client', 'build', 'index.html'));
});

// Initialisation
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
