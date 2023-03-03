module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      urlImage: { type: DataTypes.STRING, field: 'url_image' },
    },
    {
      timestamps: false,
      tableName: 'products',
      underscored: true,
    },
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
