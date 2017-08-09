"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "todos",
      [
        {
          description: "Catch up on homework",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          description: "Go for a walk",
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          description: "Job Search",
          complete: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          description: "Call Mom and Dad",
          complete: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("todos", null, {});
  }
};
