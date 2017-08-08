'use strict';

const sequelize = require('sequelize');

const todo = sequelize.define('todo', {
  title: { type: Sequelize.STRING },
  complete: { type: Sequelize.BOOLEAN }
});

// force: true will drop the table if it already exists
todo.sync({force: true}).then(() => {
  // Table created
  return todo.create({
    title: 'take a nap',
    complete: false
  });
});

todo.findAll().then(item => {
  console.log(item)
})

module.exports = function(sequelize, DataTypes) {
  let todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return todo;
};
