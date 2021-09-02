const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({ name: 'albany tabl' });
	res.status(200).json({ products, nmbHits: products.length });
};

const getAllProducts = async (req, res) => {
	const products = await Product.find(req.query);
	res.status(200).json({ products, nmbHits: products.length });
};

module.exports = {
	getAllProducts,
	getAllProductsStatic,
};
