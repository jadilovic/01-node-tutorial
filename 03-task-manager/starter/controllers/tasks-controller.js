const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
	try {
		const allTasks = await Task.find({});
		res.status(200).json({ tasks: allTasks });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		console.log(task);
		res.status(201).json(task);
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const getTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const oneTask = await Task.findOne({ _id: taskID });
		console.log(oneTask);
		if (!oneTask) {
			return res
				.status(404)
				.json({ msg: `No task with the specified id ${taskID} found` });
		}
		res.status(200).json({ oneTask });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const deleteTask = async (req, res) => {
	const { id: taskID } = req.params;
	try {
		const oneTask = await Task.findOneAndDelete({ _id: taskID });
		if (!oneTask) {
			return res
				.status(404)
				.json({ msg: `Task with the id ${taskID} does not exist` });
		}
		res.status(200).json({ oneTask });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id: taskID } = req.params;
		const oneTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
			new: true,
			runValidators: true,
		});
		if (!oneTask) {
			return res
				.status(404)
				.json({ msg: `Task with the id ${taskID} does not exist` });
		}
		res.status(200).json({ oneTask });
	} catch (error) {
		res.status(500).json({ msg: error });
	}
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
