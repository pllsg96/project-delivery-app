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
    { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'Pendente',
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

const formatSale = (saleProduct) => {
  const products = saleProduct.map(({ product, quantity }) => ({
    id: product.id,
    name: product.name,
    quantity,
    price: product.price,
    urlImage: product.urlImage,
  }));

  const sale = {
    id: saleProduct[0].sale.id,
    userId: saleProduct[0].sale.userId,
    sellerId: saleProduct[0].sale.sellerId,
    totalPrice: saleProduct[0].sale.totalPrice,
    deliveryAddress: saleProduct[0].sale.deliveryAddress,
    deliveryNumber: saleProduct[0].sale.deliveryNumber,
    status: saleProduct[0].sale.status,
    saleDate: saleProduct[0].sale.saleDate,
  };

  return { ...sale, products };
};

const getById = async (id) => {
  const saleProduct = await SaleProduct.findAll({
    where: { saleId: id },
    include: ['product', 'sale'],
  });

  if (!saleProduct) {
    return null;
  }

  const sale = formatSale(saleProduct);
 
  return sale;
};

module.exports = { create, getAll, getById };
