'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
    Employee.hasMany(models.Task, {foreignKey: 'employeeId'})
  };
  return Employee;
};