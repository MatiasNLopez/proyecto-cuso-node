'use strict';

const employeesdata = require('../models/fakerData/fakerEmployees')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', employeesdata, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
