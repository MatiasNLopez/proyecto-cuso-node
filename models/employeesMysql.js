'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeesMysql extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age:{
    type: DataTypes.INTEGER,
    allowNull:false
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false
  },
  city:{
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  streetAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jobArea: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jobDescriptor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jobType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  experience:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  decription:{
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar:{
    type: DataTypes.STRING,
    allowNull: false
  }
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return EmployeesMysql;
};