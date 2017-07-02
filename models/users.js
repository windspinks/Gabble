'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: DataTypes.STRING(20),
    password: DataTypes.STRING
  }, {});

  users.associate = function (models) {
    users.hasMany(models.messages, {as: "messages",foreignKey:"userId"});
    users.belongsToMany(models.messages, {through: "likes"});
  };
  return users;
};
