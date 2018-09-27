'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
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
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email'
                },
                isUnique: function(email, callback) {
                    Employee.findOne({
                            where: {
                                email: email
                            }
                        })
                        .then(notAvailable => callback('duplicate email'))
                        .catch(err => callback(err, null))
                }
            }
        },
        totalPoints: DataTypes.INTEGER
    }, {});
    Employee.associate = function(models) {
        Employee.belongsTo(models.Task)
    };
    return Employee;
};