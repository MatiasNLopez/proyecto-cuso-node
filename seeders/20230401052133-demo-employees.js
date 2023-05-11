'use strict';

const fakerEmployees = require('../models/fakerData/fakerEmployees'),
  config = require('../config/config');
  
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(config.dbConnection.dbCollection, fakerEmployees, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(config.dbConnection.dbCollection, null, {});
  }
};
