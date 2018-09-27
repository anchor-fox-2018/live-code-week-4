'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Employees', [{
                firstName: 'Jake',
                lastName: 'Peralta',
                email: 'jp@gmail.com',
                totalPoints: 80,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Raymond',
                lastName: 'Holt',
                email: 'rh@gmail.com',
                totalPoints: 100,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Amy',
                lastName: 'Santiago',
                email: 'as@gmail.com',
                totalPoints: 90,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Employees', null, {});
    }
};