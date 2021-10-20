const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
	const search = 'ab';
	const products = await Product.find({ price: { $gt: 30 } })
		.sort('price')
		.select('name price');
	res.status(200).json({ products, nmbHits: products.length });
};

const getAllProducts = async (req, res) => {
	const { featured, company, name, sort, select, numericFilters } = req.query;
	const objQuery = {};
	if (featured) {
		objQuery.featured = featured === 'true' ? true : false;
	}
	if (company) {
		objQuery.company = company;
	}
	if (name) {
		objQuery.name = { $regex: name, $options: 'i' };
	}
	if (numericFilters) {
		const operatorMap = {
			'<': '$lt',
			'<=': '$lte',
			'>=': '$gte',
			'>': '$gt',
			'=': '$eq',
		};
		const regExp = /\b(<|>|<=|>=|=)\b/g;
		let filters = numericFilters.replace(
			regExp,
			(match) => `-${operatorMap[match]}-`
		);
		const options = ['price', 'rating'];
		console.log('filters ', filters);
		filters = filters.split(',').forEach((item) => {
			const [field, operator, value] = item.split('-');
			if (options.includes(field)) {
				objQuery[field] = { [operator]: Number(value) };
			}
		});
	}
	console.log('objQuery ', objQuery);
	let result = Product.find(objQuery);
	if (sort) {
		const sortList = sort.split(',').join(' ');
		result = result.sort(sortList);
	} else {
		result = result.sort('createdAt');
	}
	if (select) {
		const selectList = select.split(',').join(' ');
		result = result.select(selectList);
	}
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 10;
	const skip = (page - 1) * limit;
	result = result.skip(skip).limit(limit);

	const products = await result;
	res.status(200).json({ products, nmbHits: products.length });
};

module.exports = {
	getAllProducts,
	getAllProductsStatic,
};
