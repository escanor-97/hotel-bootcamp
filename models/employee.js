'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.belongsTo(models.TypeEmployee)
      models.TypeEmployee.hasMany(Employee);
    }
  }
  Employee.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    TypeEmployeeId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};