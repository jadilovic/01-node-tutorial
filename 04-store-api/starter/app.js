require('dotenv').config();

const express = require('express');
const app = express();
require('express-async-errors');

// middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const router = require('./routes/products');

app.use(express.json());

// routes

app.get('/', (req, res) => {
	res.send('<h1>Products</h1><a href="/api/v1/products">products</a>');
});

app.use('/api/v1/products', router);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Server is listening at port ${port}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
