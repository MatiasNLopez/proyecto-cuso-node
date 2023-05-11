'use strict'

require('dotenv').config()
const path = require("path"),
    mysql2 = require('mysql2'),
    port_app =  process.env.PORT || 3000, 
    host_app = process.env.HOST,
    url_host_app = process.env.URL_HOST_APP || `http://${host_app}:${port_app}`;
    
module.exports = {
    publicDir : `${path.dirname(__dirname)}/public`,
    viewDir : `${path.dirname(__dirname)}/views`,
    faviconURL : `${path.dirname(__dirname)}/public/img/favicon.png`,
    port_app,
    host_app,
    url_host_app,
    env: process.env.ENV,
    
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
    }
}