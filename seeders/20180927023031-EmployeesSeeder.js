'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Employees', [{
      firstName: "Wika",
      lastName: "Silo",
      email: "wikasilo@hacktiv8.com",
      totalPoints: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: "Awtian",
      lastName: "Akbar",
      email: "awtianakbar@hacktiv8.com",
      totalPoints: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: "Semmi",
      lastName: "Verian",
      email: "semmiverian@hacktiv8.com",
      totalPoints: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
