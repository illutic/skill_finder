import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Constants
const PORT = process.env.PORT ?? 8080;
const DIRNAME = process.env.PWD;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(DIRNAME, 'client', 'build')));

// API Routes
app.get('/api', (req, res) => {
    res.send('Server works fine 👍');
});

// All Other Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(DIRNAME, 'client', 'build', 'index.html'));
});

// Initialisation
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
