import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import AuthRoutes from './routes/auth-routes.js';
import APIRoutes from './routes/api-routes.js';
import database from './database/database.js';
import makeAssociations from './database/associations.js';

// Constants
const PORT = process.env.PORT ?? 8081;
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
        makeAssociations();
        await database.sync({
            // force: true,
            // alter: true,
            // ^ Uncomment whenever you update the schema
            // eg. when creating a new model, updating an old one.
        });
        app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
    } catch (err) {
        console.log(Error(err));
    }
})();
