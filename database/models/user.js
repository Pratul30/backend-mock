'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define relationship here between User and Task
            User.hasMany(models.Task, {
                foreignKey: 'userId',
                as: 'tasks'
            });
        }
    }
    User.init({
        email: DataTypes.STRING,
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};