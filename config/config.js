'use strict'

require('dotenv').config()

module.exports = {
    development: {
        username : process.env.DB_NAME,
        host :process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        collection: process.env.COLLECTION,
        dialect: process.env.DIALECT,
    }
}