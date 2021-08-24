console.log('Welcome to Node Tutorial');

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
	highWaterMark: 90000,
	encoding: 'utf-8',
});

stream.on('data', (err, result) => {
	if (err) {
		console.log(err);
	} else {
		console.log(result);
	}
});
