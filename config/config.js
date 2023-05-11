'use strict'

require('dotenv').config()
const path = require("path"),
    mysql2 = require('mysql2'),
    config = { 
        enviroment : process.env.ENV,
        eviromentMode:{
            develop: 'develop',
            production: 'production',
            test: 'test',
        },
        app:{
            port:  process.env.PORT || 3000, 
            host: process.env.HOST,
            url_host: process.env.URL_HOST_APP || `http://${process.env.HOST}:${process.env.PORT}`,
            publicDir : `${path.dirname(__dirname)}/public`,
            viewDir : `${path.dirname(__dirname)}/views`,
            faviconURL : `${path.dirname(__dirname)}/public/img/favicon.png`,
            env: process.env.ENV,
        },
       
        development: {
            username : process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            dbCollection: process.env.DB_COLLECTION,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: 'mysql',
            dialectModule: mysql2,
            dbEngine: process.env.DB_ENGINE
        },
        
        production: {
            username : process.env.DB_USER_PRODUCTION,
            password: process.env.DB_PASSWORD_PRODUCTION,
            database: process.env.DB_DATABASE_PRODUCTION,
            dbCollection: process.env.DB_COLLECTION_PRODUCTION,
            host: process.env.DB_HOST_PRODUCTION,
            port: process.env.DB_PORT_PRODUCTION,
            dialect: 'mysql',
            dialectModule: mysql2,
            dbEngine: process.env.DB_ENGINE_PRODUCTION
        },
        dbConnection:{}
    };
    
    config.dbConnection = 
        config.enviroment ===  config.eviromentMode.develop 
        ? config.development 
        : config.production

module.exports = config