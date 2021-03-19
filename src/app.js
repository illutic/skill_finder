import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import AuthRoutes from './routes/auth-routes.js';
import APIRoutes from './routes/api-routes.js';
import database from './data-access/database.js';
import makeAssociations from './data-access/associations.js';
import { WebSockets } from './sockets/WebSockets.js';

/** App Module
 * @module app
 */

/** The port the server is running. Defaults to 8081
 * @type {int}
 */
const PORT = process.env.PORT ?? 8081;

/** The Directory of the project. If none is specified the directory will be the one where app.js is run from.
 * @type {string}
 */
const DIRNAME = process.env.PWD ?? '';

/** The Express Constructor */
const app = express();

/** Use a JSON parser middleware */
app.use(express.json());

/** Use a Cookie parser middleware */
app.use(cookieParser());

/** Use a File passing middleware */
app.use(express.static(path.join(DIRNAME, 'client', 'build')));

/** Authentication API Routes */
app.use(AuthRoutes);

/** App API Routes */
app.use(APIRoutes);
app.get('*', (req, res) => {
    res.sendFile(path.join(DIRNAME, 'client', 'build', 'index.html'));
});

/** Initialize the database and listen for connections. */
(async () => {
    try {
        makeAssociations();
        await database.sync({
            // force: true,
            // alter: true,
            // ^ Uncomment whenever you update the schema
            // eg. when creating a new model, updating an old one.
        });
        const httpServer = app.listen(PORT, () =>
            console.log(`Server running at port ${PORT}`)
        );
        const io = new Server(httpServer);
        WebSockets(io);
    } catch (err) {
        console.log(Error(err));
    }
})();
