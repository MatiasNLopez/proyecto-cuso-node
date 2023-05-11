'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config/config');
const dbConn = config.env === 'dev' ? config.development : config.production;
const db = {};

const sequelize = new Sequelize(dbConn.database, dbConn.username , dbConn.password, dbConn);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
