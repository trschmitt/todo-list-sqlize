"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "item",
      [
        {
          description: "catch up on homework",
          complete: false,

        }
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
