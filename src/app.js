import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import sequelize from './database/database.js';
import AuthRoutes from './routes/auth-routes.js';
import APIRoutes from './routes/api-routes.js';

// Constants
const PORT = process.env.PORT ?? 8081;
const DIRNAME = process.env.PWD;
const app = express();

// This import style is called CommonJS:
// const Sequelize = require('sequelize');
// It's slowly dying because of a newer standard called ES Modules.
// I set the modules to ES Modules in this project, that's why CommonJS won't work.
// Check out these:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

// Middleware
app.use(bodyParser.json());
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
        await sequelize.sync({
            // Force reset the database schema:
            // force: true,
            // ^ Uncomment whenever you update the schema
            // eg. when creating a new model, updating an old one.
        });
        app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
    } catch (err) {
        // throw new Error(err);
    }
})();
