const { people } = require('../data');

const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
	const { name } = req.body;
	if (!name) {
		res.status(400).json({ success: false, msg: 'Please enter value' });
	} else {
		res.status(201).json({ success: true, person: name });
	}
};

const createPresonPostman = (req, res) => {
	const { name } = req.body;
	if (!name) {
		res.status(400).json({ success: false, msg: 'Please enter value' });
	} else {
		res.status(201).json({ success: true, data: [...people, name] });
	}
};

const updatePerson = (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	const newPerson = people.find((person) => person.id === Number(id));

	if (!newPerson) {
		return res
			.status(404)
			.json({ success: false, msg: `There is no person with id ${id}` });
	} else {
		const newPeople = people.map((person) => {
			if (person.id === Number(id)) {
				person.name = name;
			}
			return person;
		});
		res.status(201).json({ success: true, data: newPeople });
	}
};

const deletePerson = (req, res) => {
	const guy = people.find((person) => person.id === Number(req.params.id));
	if (!guy) {
		return res.status(401).json({
			success: false,
			msg: `No person with id ${req.params.id} found`,
		});
	} else {
		const newPeople = people.filter(
			(person) => person.id !== Number(req.params.id)
		);
		res.status(200).json({ success: true, data: newPeople });
	}
};

module.exports = {
	getPeople,
	createPerson,
	createPresonPostman,
	updatePerson,
	deletePerson,
};
