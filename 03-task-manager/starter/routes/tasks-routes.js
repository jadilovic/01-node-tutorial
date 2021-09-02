const express = require('express');
const router = express.Router();
const {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
} = require('../controllers/tasks-controller'); // controllers with task methods

router.route('/').get(getAllTasks).post(createTask); // request routes
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask); // request routes

module.exports = router;
