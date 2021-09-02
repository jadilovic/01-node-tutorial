const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
	const allTasks = await Task.find({});
	res.status(200).json({ tasks: allTasks });
});

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(201).json(task);
});

const getTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const oneTask = await Task.findOne({ _id: taskID });
	if (!oneTask) {
		return next(
			createCustomError(`No task with the specified id ${taskID} found`, 404)
		);
	}
	res.status(200).json({ oneTask });
});

const deleteTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;
	const oneTask = await Task.findOneAndDelete({ _id: taskID });
	if (!oneTask) {
		return next(
			createCustomError(`No task with the specified id ${taskID} found`, 404)
		);
	}
	res.status(200).json({ oneTask });
});

const updateTask = asyncWrapper(async (req, res) => {
	const { id: taskID } = req.params;
	const oneTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
		new: true,
		runValidators: true,
	});
	if (!oneTask) {
		return next(
			createCustomError(`No task with the specified id ${taskID} found`, 404)
		);
	}
	res.status(200).json({ oneTask });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
