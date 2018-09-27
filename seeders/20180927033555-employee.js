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
     firstName: "test",
     lastName: "test2",
     email: "test3",
     createdAt: new Date,
     updatedAt: new Date
    },{
      firstName: "Lundy",
      lastName: "Orlando",
      email: "lundy@gmail.com",
      createdAt: new Date,
      updatedAt: new Date
     },{
      firstName: "Muhammad",
      lastName: "Abduh",
      email: "abduh@gmail.com",
      createdAt: new Date,
      updatedAt: new Date
     }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Emplooyees', null, {});
  }
};
