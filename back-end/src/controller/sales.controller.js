const service = require('../services/sales.services');

const create = async (req, res) => {
    const { userId, sellerId, deliveryAddress, deliveryNumber, products } = req.body;
    const sale = await service
    .create({ userId, sellerId, deliveryAddress, deliveryNumber, products });
    if (sale.type) return res.status(sale.statusCode).json({ message: sale.message });
    
    res.status(201).json(sale);
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

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sale = await service.updateStatus(id, status);

  res.status(200).json(sale);
}; 
module.exports = {
  create,
  getAll,
  getById,
  updateStatus,
};
