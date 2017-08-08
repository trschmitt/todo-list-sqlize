const sequalize = require('sequalize');

const item = sequelize.define('item', {
  title: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },

});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    title: 'John',
    lastName: 'Hancock'
  });
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
