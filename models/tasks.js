'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    EmployeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    }
  }, {});
  Tasks.associate = function (models) {
    // associations can be defined here
    Tasks.belongsTo(models.Employee);
  };
  return Tasks;
};