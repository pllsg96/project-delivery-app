'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
  }, {
    underscored: true,
    tableName: 'users',
    timestamps: false,
  });
  
  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'userId', as: 'user' }, { foreignKey: 'sellerId', as: 'sales' })
  };
  

  return User;
};