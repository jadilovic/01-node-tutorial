console.log('Express Tutorial');

const express = require('express');
const path = require('path');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => {
	console.log('Server is running at port 5000');
});
