'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Tasks', 'EmployeeId', {
            type: Sequelize.INTEGER,
            allowNull: false
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Tasks', 'EmployeeId');
    }
};