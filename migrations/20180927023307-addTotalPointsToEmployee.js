'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Employee', 'totalPoints', {
            type: Sequelize.INTEGER,
            defaultValue: 0
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Employee', 'totalPoints');
    }
};