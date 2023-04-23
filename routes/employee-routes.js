'use strict'

const express = require('express'),
    router = express.Router(),
    employeeController = require('../controllers/employee-controller');

router
.get('/', employeeController.getAll)
.get('/add/employee', employeeController.addForm)

.get('/update/:id', employeeController.getOne)

.post('/', employeeController.save)
.put('/edit/employee/:id', employeeController.save)
.delete('/delete/:id', employeeController.delete)
.use(employeeController.error404)
module.exports = router