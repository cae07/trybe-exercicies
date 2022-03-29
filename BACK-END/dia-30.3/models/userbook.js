'use strict';

module.exports = (Sequelize, DataTypes) => {
  const UserBook = Sequelize.define('UserBook',
  {},
  { timestamps: false },
  );

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UserBook;
};
