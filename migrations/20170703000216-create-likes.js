'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('likes', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"users",
          key:"id"
        }
      },
      messageId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"messages",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('likes');
  }
};
