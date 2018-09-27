'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [
      {
        firstName: 'Mister',
        lastName: 'Ius',
        email: 'personal@misterius.com',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        firstName: 'Muhammad',
        lastName: 'Mifza ',
        email: 'mifzan@misterius.com',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        firstName: 'Sugeng',
        lastName: 'Gesung',
        email: 'sugengsung@misterius.com',
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ])
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', [])
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
