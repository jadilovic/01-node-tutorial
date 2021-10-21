// check if username and password exist
// create JWT if exists
// send to front end
// setup authentication so only requests with JWT can access dashboard
const { BadRequestError } = require('../errors');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
	const { username, password } = req.body;
	// if data entered
	// mongopse validation
	// Joi package
	// check in the controller
	if (!username || !password) {
		throw new BadRequestError('You must provide both username and password');
	}
	const id = new Date().getDate();
	const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});
	res.status(200).json({ msg: 'user created', token });
};

// DASHBOARD
const dashboard = async (req, res) => {
	const luckyNumber = Math.floor(Math.random() * 100);
	res.status(200).json({
		msg: `Hello ${req.user.username}`,
		secret: `Your lucky number is ${luckyNumber}`,
	});
};

module.exports = { login, dashboard };
