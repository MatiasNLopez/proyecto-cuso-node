'use strict';


const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const db = require('./index');
const config = require('../config/config');

const EmployeesMysql = db.sequelize.define(config.dbConnection.dbCollection,{
  _id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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
  /* jobTitle: {
    type: DataTypes.STRING,
    allowNull: false
  }, */
  jobType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  experience:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  /* decription:{
    type: DataTypes.TEXT,
    allowNull: false
  }, */
  avatar:{
    type: DataTypes.STRING,
    allowNull: false
  }
})

  module.exports = EmployeesMysql;