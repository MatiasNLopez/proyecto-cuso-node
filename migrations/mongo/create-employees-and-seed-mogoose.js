'use strict'

const employees = require('../../models/fakerData/fakerEmployees');

const mongoose = require('mongoose'),
    config = require('../../config/config').development,
    fakerEmployees = require('../../models/fakerData/fakerEmployees'),
    Employees = require('../../models/employeesMongoo'),
    DB_URL = `mongodb://${config.host}/${config.database}`;
    
//Esto no anda y antes andaba 
mongoose.connect(DB_URL, {useNewUrlParser: true});

const conn = mongoose.createConnection(DB_URL);

conn
.dropDatabase()
.then(() => console.log(`Drop database ${conn.db.databaseName}`))
.finally(() => {
  /* Migrations */
  Employees
  .insertMany(fakerEmployees)
  .then(() => {
    console.log(`Created database ${conn.db.databaseName}\nmigration completed successfully`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(`Migration error: ${err}`);
    mongoose.disconnect();
  });  
})



