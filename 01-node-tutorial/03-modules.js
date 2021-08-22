// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names');
const names2 = require('./04.1-names');
const say = require('./05-utils');
const data = require('./06-alternative-flavor');
require('./07-mind-grenade');
say('susan');
say(names.john);
say(names.peter);

const sayBye = (name) => {
	console.log(`Bye Bye my friend ${name}`);
};

console.log(data);
sayBye(names.john);
sayBye('aki');
sayBye(names2.cuni);
console.log(names2);
