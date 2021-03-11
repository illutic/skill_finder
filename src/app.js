/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import sequelize from './database/database.js';
import AuthRoutes from './routes/auth-routes.js';
import APIRoutes from './routes/api-routes.js';

// Constants
const PORT = process.env.SERVER_PORT ?? 8081;
const DIRNAME = process.env.PWD ?? '';
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(DIRNAME, 'client', 'build')));

// Routes
app.use(AuthRoutes);
app.use(APIRoutes);
app.get('*', (req, res) => {
    res.sendFile(path.join(DIRNAME, 'client', 'build', 'index.html'));
});

// Initialisation
(async () => {
    try {
        await sequelize
            .sync({
                // Force reset the database schema:
                // force: true,
                // alter: true,
                // ^ Uncomment whenever you update the schema
                // eg. when creating a new model, updating an old one.
            })
            .then(() => {
                app.listen(PORT, () =>
                    console.log(`Server running at port ${PORT}`)
                );
            });
    } catch (err) {
        console.log(Error(err));
    }
})();
