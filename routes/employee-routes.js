'use strict'

const express = require('express'),
    router = express.Router(),
    employeeController = require('../controllers/employee-controller');

router
.get('/', employeeController.getAll)
.post('/', employeeController.save)

.get('/add/employee', employeeController.addForm)

.get('/update/employee/:id', employeeController.getOne)
.put('/update/employee/:id', employeeController.save)

.delete('/delete/employee/:id', employeeController.delete)

.use(employeeController.error404)

module.exports = router