const express = require('express');
const router = express.Router();
const {
	getPeople,
	createPerson,
	createPresonPostman,
	updatePerson,
	deletePerson,
} = require('../controller/peopleController');

/*
router.get('/', getPeople);

router.post('/', createPerson);

router.post('/postman', createPresonPostman);

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);
*/

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPresonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
