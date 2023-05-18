'use strict'

require('dotenv').config()
const path = require("path"),
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
            host: process.env.DB_HOST || '',
            port: process.env.DB_PORT || '',
            dialect: 'mysql',
            options: process.env.DB_OPTIONS,
            dbEngine: process.env.DB_ENGINE,
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false,
                }
            } 
        },
        test: {
            username : process.env.DB_USER_TEST,
            password: process.env.DB_PASSWORD_TEST,
            database: process.env.DB_DATABASE_TEST,
            dbCollection: process.env.DB_COLLECTION_TEST,
            host: process.env.DB_HOST_TEST || '',
            port: process.env.DB_PORT_TEST || '',
            dialect: 'mysql',
            options: process.env.DB_OPTIONS_TEST,
            dbEngine: process.env.DB_ENGINE_TEST,
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false,
                }
            } 
        },
        production: {
            username : process.env.DB_USER_PRODUCTION,
            password: process.env.DB_PASSWORD_PRODUCTION,
            database: process.env.DB_DATABASE_PRODUCTION,
            dbCollection: process.env.DB_COLLECTION_PRODUCTION,
            host: process.env.DB_HOST_PRODUCTION || '',
            port: process.env.DB_PORT_PRODUCTION || '',
            dialect: 'mysql',
            options: process.env.DB_OPTIONS_PRODUCTION || '',
            dbEngine: process.env.DB_ENGINE_PRODUCTION,
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false,
                }
            } 
        },
        dbConnection:{}
    };
    
    if(config.enviroment ===  config.eviromentMode.production)
        config.dbConnection = config.production
    else if(config.enviroment ===  config.eviromentMode.test)        
        config.dbConnection = config.test
    else config.dbConnection = config.development

module.exports = config