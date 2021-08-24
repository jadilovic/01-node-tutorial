console.log('Express Tutorial');

const express = require('express');
const path = require('path');
const app = express();
const { products } = require('./data');

/*
app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});
*/

app.get('/', (req, res) => {
	res.json(products);
});

app.get('/about', (req, res) => {
	res.status(200).send('About Page');
});

app.all('*', (req, res) => {
	res.status(404).send('Error Page');
});

app.listen(5000, () => {
	console.log('Server is running at port 5000');
});
