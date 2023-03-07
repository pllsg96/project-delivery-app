module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("SaleProduct", {
      saleId: { 
        type: DataTypes.INTEGER, 
        primaryKey: true,  
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'sale_id',
      },
      productId: { 
        type: DataTypes.INTEGER, 
        primaryKey: true ,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'product_id',
      },
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "sales_products",
      timestamps: false,
      underscored: true,
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
