console.log('Task Manager App');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks-routes');
const notFound = require('./middleware/not-found');
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

/*
app.get('/hello', (req, res) => {
	res.status(200).send('Hello World');
});
*/

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Server is listening at port ${port}`);
		});
	} catch (err) {
		console.log(err);
	}
};

start();
