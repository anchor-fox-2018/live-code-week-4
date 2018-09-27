'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Salah format email"
        },
      },
      unique: {
        args: true,
        msg: "Email sudah dipakai"
      }
    },
    totalPoints: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {});
  Employees.associate = function (models) {
    // associations can be defined here
  };
  return Employees;
};