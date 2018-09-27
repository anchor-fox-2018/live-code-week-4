'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    totalPoints: {type: DataTypes.INTEGER, defaultValue: 0}
  }, {});
  Employees.associate = function(models) {
    // associations can be defined here
    Employees.belongsToMany(models.Tasks, {through: 'TasksEmployees'})
  };
  return Employees;
};