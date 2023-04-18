'use strict'

const EmployeeModel = require('../models/employee-model'),
    config = require('../config/config').development;

const EmployeeController = () => {};

EmployeeController.getAll = (req,res, next) => {
    EmployeeModel.getAll(config.dialect, (data) => {
        let locals = {
            title: 'Lista de empleados',
            data
        }
        
        res.render('index', locals)
    })
   
}

/* EmployeeController.getOne()
EmployeeController.save()
EmployeeController.delete() */

module.exports = EmployeeController
