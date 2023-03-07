const Sequelize = require('sequelize');
const { Sale, SaleProduct } = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const calculateTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, { quantity, price }) => {
    const total = quantity * price;
    return acc + total;
  }, 0);  
  return totalPrice;
};

const create = async (body) => {
  const t = await sequelize.transaction();

  try {
    const { userId, sellerId, deliveryAddress, deliveryNumber, products } = body;
    const totalPrice = calculateTotalPrice(products);
  const sale = await Sale.create(
    { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'Pedido Recebido',
    }, { transaction: t },
  );
  const saleId = sale.id;
    const salesProducts = products.map(({ id, quantity }) => ({ saleId, productId: id, quantity }));
   await SaleProduct.bulkCreate(salesProducts, { transaction: t });
   await t.commit();
   return sale;
  } catch (err) {
    await t.rollback();
    return { type: 'Create_Error', statusCode: 400, message: err.message };
  }
};

const getAll = async (id, role) => {
  if (role === 'customer') {
    const sales = await Sale.findAll({ where: { userId: id } });
    return sales;
  } if (role === 'seller') {
    const sales = await Sale.findAll({ where: { sellerId: id } });
    return sales;
  } 
    const sales = await Sale.findAll();
    return sales;
};

const getById = async (id) => {
  const sale = await Sale.findByPk(id, {
    include: ['products'],
  });

  if (!sale) {
    return null;
  }

  return sale;
};

module.exports = { create, getAll, getById };
