'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    points: DataTypes.INTEGER,
    isComplete: DataTypes.BOOLEAN
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.Employee, {foreignKey: 'employeeId'})
  };
  return Task;
};