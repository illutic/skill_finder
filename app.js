import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Constants
const PORT = process.env.PORT ?? 8080;
const __dirname = process.env.PWD;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

// API Routes
app.get('/', (req, res) => {
	res.sendStatus(200);
});

// Static Routes
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Initialization
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
