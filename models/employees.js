'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  }, {});
  Employees.associate = function (models) {
    // associations can be defined here
  };
  return Employees;
};