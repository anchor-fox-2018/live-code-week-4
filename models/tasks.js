'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    points: {
      type: DataTypes.INTEGER
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultvalue: false
    }
  }, {});
  Tasks.associate = function (models) {
    // associations can be defined here
  };
  return Tasks;
};