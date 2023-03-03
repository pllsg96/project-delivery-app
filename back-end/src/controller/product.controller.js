const services = require('../services/product.services');

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await services.getAll();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
};
