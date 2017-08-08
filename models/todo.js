'use strict';
module.exports = function(sequelize, DataTypes) {
  var todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return todo;
};
