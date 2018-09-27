'use strict';
module.exports = (sequelize, DataTypes) => {
  const TasksEmployees = sequelize.define('TasksEmployees', {
    TasksId: DataTypes.INTEGER,
    EmployeesId: DataTypes.INTEGER
  }, {});
  TasksEmployees.associate = function(models) {
    // associations can be defined here
  };
  return TasksEmployees;
};