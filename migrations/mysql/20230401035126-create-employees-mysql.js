'use strict';
const config = require('../../config/config').development
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(config.collection, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      city:{
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      streetAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jobArea: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jobDescriptor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jobTitle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      jobType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      experience:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      decription:{
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar:{
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(config.collection);
  }
};