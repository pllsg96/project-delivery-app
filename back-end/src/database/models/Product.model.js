module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      url_image: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "product",
    }
  );

  Product.associate = (models) => {
    Product.belongsToMany(models.Sale, {
      through: "sale_product",
      as: "sale",
      foreignKey: "product_id",
    });
  }

  return Product;
};