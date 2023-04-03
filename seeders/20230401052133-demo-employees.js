'use strict';

const fakerEmployees = require('../models/fakerData/fakerEmployees'),
  config = require('../config/config').development

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(config.collection, fakerEmployees, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(config.collection, null, {});
  }
};
