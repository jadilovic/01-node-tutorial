const getAllJobs = async (req, res) => {
	res.send('get all jobs');
};

const createJob = async (req, res) => {
	res.json(req.user);
};

const updateJob = async (req, res) => {
	res.send('update job');
};

const getJob = async (req, res) => {
	res.send('get job');
};

const deleteJob = async (req, res) => {
	res.send('delete job');
};

module.exports = { getAllJobs, createJob, updateJob, getJob, deleteJob };
