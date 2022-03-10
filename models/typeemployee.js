'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeEmployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeEmployee.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          args: true,
          msg: "Only words are allowed"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'TypeEmployee',
  });
  return TypeEmployee;
};