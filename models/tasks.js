'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    points: DataTypes.INTEGER,
    isComplete: DataTypes.BOOLEAN,
    EmployeeId: DataTypes.INTEGER
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};