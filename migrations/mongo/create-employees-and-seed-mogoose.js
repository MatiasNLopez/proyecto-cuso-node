'use strict'

const employees = require('../../models/fakerData/fakerEmployees');

const mongoose = require('mongoose'),
    config = require('../../config/config'),
    dbConn = config.env === 'dev' ? config.development: config.production,
    fakerEmployees = require('../../models/fakerData/fakerEmployees'),
    Employees = require('../../models/employees-mongoo'),
    DB_URL = `mongodb://${dbConn.dbHost}/${dbConn.database}`,
    conn = mongoose.createConnection(DB_URL);
    console.log(dbConn);
//Esto no anda y antes andaba 
conn
.dropDatabase()
.then(() => console.log(`Drop database ${conn.db.databaseName}`))
.finally(() => {
  /* Migrations */
  Employees
  .insertMany(fakerEmployees)
  .then((data) => {
    console.log(`Created database ${conn.db.databaseName}\nmigration completed successfully`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(`Migration error: ${err}`);
    mongoose.disconnect();
  });  
})



