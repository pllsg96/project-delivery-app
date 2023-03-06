module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("SaleProduct", {
      sale_id: { type: DataTypes.INTEGER, primaryKey: true },
      product_id: { type: DataTypes.INTEGER, primaryKey: true },
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "sales_products",
    }
  );

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(models.Sale, {
      foreignKey: "sale_id",
      as: "sale",
    });
    SaleProduct.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "product",
    });
  };

  return SaleProduct;
};