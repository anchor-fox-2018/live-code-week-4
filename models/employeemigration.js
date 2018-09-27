'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeeMigration = sequelize.define('EmployeeMigration', {
    totalPoints: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER
  }, {});
  EmployeeMigration.associate = function(models) {
    // associations can be defined here
  };
  return EmployeeMigration;
};