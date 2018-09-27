'use strict';
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isComplete: DataTypes.BOOLEAN
    }, {});
    Task.associate = function(models) {
        Task.hasMany(models.Employee)
    };
    return Task;
};