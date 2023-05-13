import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.listen(8080, () => {
	console.log("Server is listening 8080 port\n localhost:8080");
})

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.post('/login', (req, res) => {
	const { userId, password } = req.body;
	if (userId === 'juha' && password === '1234') {
		res.status(200).send();
	} else {
		res.status(401).send();
	}
});
