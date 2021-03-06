'use strict';

module.exports = function(sequelize, DataTypes) {
  let todo = sequelize.define('todo', {
    description: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        
        // associations can be defined here
      }
    }
  });
  return todo;
};
