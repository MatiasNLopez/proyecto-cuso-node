'use strict'

const employees = require('../../models/fakerData/fakerEmployees');
const mongoose = require('mongoose'),
  config = require('../../config/config'),
  fakerEmployees = require('../../models/fakerData/fakerEmployees'),
  Employees = require('../../models/employees-mongoo'),
  conn = mongoose.createConnection(config.dbConnection.host);

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



