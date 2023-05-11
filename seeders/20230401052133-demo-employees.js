'use strict';

const fakerEmployees = require('../models/fakerData/fakerEmployees'),
  config = require('../config/config'),
  dbConn = config.env === 'dev' ? config.development : config.production;
  
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(dbConn.dbCollection, fakerEmployees, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(dbConn.dbCollection, null, {});
  }
};
