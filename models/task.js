'use strict';
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        points: DataTypes.INTEGER,
        isComplete: DataTypes.BOOLEAN
    }, {});
    Task.associate = function(models) {
        Task.hasMany(models.Employee)
    };
    return Task;
};