'use strict'

require('dotenv').config()
const path = require("path"),
    mysql2 = require('mysql2')

module.exports = {
    publicDir : `${path.dirname(__dirname)}/public`,
    viewDir : `${path.dirname(__dirname)}/views`,
    faviconURL : `${path.dirname(__dirname)}/public/img/favicon.png`,
    port :  process.env.PORT || 3000, 
    host :process.env.HOST,
    development: {
        username : process.env.DB_USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        collection: process.env.COLLECTION,
        dialect: 'mysql',
        dialectModule: mysql2,
        dbEngine: process.env.DB_ENGINE
    }

    
}