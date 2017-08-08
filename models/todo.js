'use strict';

const sequelize = require('sequelize');

const item = sequelize.define('item', {
  title: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  complete: { type: Sequelize.BOOLEAN }
});

// force: true will drop the table if it already exists
item.sync({force: true}).then(() => {
  // Table created
  return item.create({
    title: 'take a nap',
    description: 'get some sleep bruh',
    complete: false
  });
});

item.findAll().then(users => {
  console.log(users)
})

module.exports = function(sequelize, DataTypes) {
  let todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return todo;
};
