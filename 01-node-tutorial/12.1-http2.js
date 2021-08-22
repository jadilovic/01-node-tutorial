const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Welcome to homepage dear');
	} else if (req.url === '/about') {
		res.end('Thsi is about page');
	} else {
		res.end(`<h1>No other page available</h1>
    <a href="/">link home</a>`);
	}
});

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

server.listen(5001);
