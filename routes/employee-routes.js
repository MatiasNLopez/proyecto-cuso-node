'use strict'

const express = require('express'),
    router = express.Router(),
    employeeControler = require('../controllers/employee-controller');

router
.get('/', employeeControler.getAll)

module.exports = router