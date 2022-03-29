'use strict';

module.exports = (Sequelize, DataTypes) => {
  constUser = Sequelize.define('User', {
    userId: { type: DataTypes.INTEGER, primaryKey: true, },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'Users',
    undescored: true,
  });

  return User;
};
