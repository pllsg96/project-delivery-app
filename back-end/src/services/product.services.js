const { Product } = require('../database/models/Product.model');

const getAll = async () => {
  const products = await Product.findAll();

  return products;
};

module.exports = {
  getAll,
};
