const service = require('../services/sales.services');

const create = async (req, res) => {
 try {
   const { userId, sellerId, deliveryAddress, deliveryNumber, products } = req.body;
   const sale = await service
   .create({ userId, sellerId, deliveryAddress, deliveryNumber, products });
   res.status(201).json(sale);
 } catch (err) {
    res.status(400).json({ message: err.message });
  }
}; 

const getAll = async (_req, res) => {
  const sales = await service.getAll();
  res.status(200).json(sales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await service.getById(id);
  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  res.status(200).json(sale);
};

module.exports = {
  create,
  getAll,
  getById,
};
