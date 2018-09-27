'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    points: DataTypes.INTEGER,
    isComplete: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
  }, {});
  Tasks.associate = function(models) {
    // associations can be defined here
    Tasks.belongsToMany(models.Employees, {through: 'TasksEmployees'})
  };
  return Tasks;
};