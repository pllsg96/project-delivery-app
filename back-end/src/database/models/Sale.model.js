'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    sellerId: { type: DataTypes.INTEGER, allowNull: false },
    totalPrice: { type: DataTypes.DECIMAL, allowNull: false },
    deliveryAddress: { type: DataTypes.STRING, allowNull: false },
    deliveryNumber: { type: DataTypes.STRING, allowNull: false },
    saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  }, {
    underscored: true,
    tableName: 'sales',
    timestamps: false,
  });
  
  Sale.associate = (models) => {
  };
  

  return Sale;
};