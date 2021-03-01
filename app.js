import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT ?? 8080;

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
