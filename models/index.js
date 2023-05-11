'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize(config.dbConnection.database, config.dbConnection.username , config.dbConnection.password, config.dbConnection);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
