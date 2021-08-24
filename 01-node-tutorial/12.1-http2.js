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
console.log('hello world');

console.time();
let total = 0;

console.log('firstLoop');
for (let i = 0; i < 30000000; i++) {
	total = i;
}
console.timeEnd();
console.log('secondLoop');

console.log('first');
setTimeout(() => {
	console.log('second');
}, 0);
]
console.log('third');

server.listen(5001);
