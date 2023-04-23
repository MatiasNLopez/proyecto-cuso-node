'use strict'

require('dotenv').config()
const path = require("path")

module.exports = {
    publicDir : `${path.dirname(__dirname)}/public`,
    viewDir : `${path.dirname(__dirname)}/views`,
    faviconURL : `${path.dirname(__dirname)}/public/img/favicon.png`,
    port :  process.env.PORT || 3000, 
    
    development: {
        username : process.env.DB_NAME,
        host :process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        collection: process.env.COLLECTION,
        dialect: 'mysql',
        dbEngine: process.env.DB_ENGINE
    }
}