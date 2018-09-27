'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        totalPoints: DataTypes.INTEGER
    }, {});
    Employee.associate = function(models) {
        Employee.belongsTo(models.Task)
    };
    return Employee;
};