import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import AuthRoutes from './routes/auth-routes.js';
import APIRoutes from './routes/api-routes.js';
import FileRoutes from './routes/file-routes.js';
import database from './data-access/database.js';
import makeAssociations from './data-access/associations.js';
import { WebSockets } from './sockets/WebSockets.js';

/** Define local constants */
const PORT = process.env.PORT ?? 8081;
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
