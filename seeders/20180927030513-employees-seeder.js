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
     firstName : 'abduh', 
     lastName : 'muhamad', 
     email : 'abduh@employee.id',
     createdAt : new Date(),
     updatedAt : new Date()
   }, 
    {
      firstName : 'lundy', 
      lastName : 'orlando', 
      email : 'lundy@employee.id',
      createdAt : new Date(),
      updatedAt : new Date()
    }, 
    {
      firstName : 'yaya', 
      lastName : 'hidayatullah', 
      email : 'yaya@employee.id',
      createdAt : new Date(),
      updatedAt : new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
