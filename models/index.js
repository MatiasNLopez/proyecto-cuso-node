'use strict';

const fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    basename = path.basename(__filename),
    config = require('../config/config'),
    mysql2 = require('mysql2'),
    db = {};

const sequelize = new Sequelize(
    config.dbConnection.database, 
    config.dbConnection.username, 
    config.dbConnection.password, 
    {
        host: config.dbConnection.host,
        dialect: config.dbConnection.dialect,
        dialectModule: mysql2,
        dialectOptions: config.dbConnection.dialectOptions
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
