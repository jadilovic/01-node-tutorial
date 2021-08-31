const getAllProductsStatic = async (req, res) => {
	throw new Error('static products error');
	res.status(200).json({ msg: 'get all products static' });
};

const getAllProducts = async (req, res) => {
	res.status(200).json({ msg: 'get all products testing' });
};

module.exports = {
	getAllProducts,
	getAllProductsStatic,
};
