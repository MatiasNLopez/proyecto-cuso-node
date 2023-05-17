'use strict'

const employees = require('../models/fakerData/fakerEmployees');

const EmployeeModel = require('../models/employee-model'),
    config = require('../config/config'),
    formidable = require('formidable'), /* Permite parsear los datos de un formulario */
    fse = require('fs-extra'),
    uploadPath =  `${__dirname}/../public/uploads`;

const EmployeeController = () => {};

EmployeeController.addForm = (req,res,next) =>{res.render('employee-form',{'title':'Agregar empleado'})}

const error = (res,title, description, error) =>{
    console.log(error);
    res.status(500)
    res.render('error', {title,description,error})
}

EmployeeController.getAll = (req,res, next) => {
    EmployeeModel.getAll( (err, data) => {
        
        if(err) error(res,'Error', 'Error al obtener empleados',err)

        let locals = {
            title: 'Lista de empleados',
            data
        }
        
        res.render('index', locals)
    })
   
}

EmployeeController.getOne = (req, res, next) =>{
    let employeeId =req.params.id
    EmployeeModel.getOne(employeeId, (err, data)=>{
        if(err) error(res,`Error al obtener el empleado`,`Error al obtener el empleado con id ${employeeId}`,err)
        
        res.render('employee-form',{'title':`Editar empleado` , 'employee':data})
    })

}

/* 
    Tendrian que ser dos metodos un metodo que inserte el employee con una imagen pordefecto 
    y otro metodo que sea upload file que suba el archivo y actualice la imagen 

*/

EmployeeController.save = async (req, res, next) =>{
    const form = new formidable.IncomingForm();
    form
    .parse(req, (err, fields, file) => {
        
        let avatarFile = JSON.parse(JSON.stringify(file.avatar)),
            employee = fields;
            
        if(avatarFile.size > 0){
            if(err) error(res,'Error', 'Error al guardar empleado',err)
            let cpPath = `${uploadPath}/${avatarFile.originalFilename}`,
                fileDBPath = `/uploads/${avatarFile.originalFilename}`;
            fse.copy(avatarFile.filepath, cpPath, err =>{ 
                if(err) error(res,  'Upload Error', "Error al subir archivo", err)
                else {
                    employee.avatar = fileDBPath
                    EmployeeModel.save( employee, (err, data)=>{
                        if(err) error(res,'Error', 'Error al guardar empleado',err)
                        else {
                            res.status(200);
                            res.redirect("/");
                        }
                    })
                }
            }) 
        }
        else {
            EmployeeModel.save(employee, (err, data)=>{
                if(err) error(res,'Error', 'Error al guardar empleado',err)
                else {
                    res.status(200);
                    res.redirect("/");
                }
            })
        }
    })
}

/* No redirige */
EmployeeController.delete = (req, res, next) =>{
    
    EmployeeModel.delete( req.params.id, (err,data) => {
        if(err) error(res,'Error', 'Error al eliminar empleado',err)
        res.status(200);
        res.redirect("/")
    })
}

EmployeeController.error404 = (req,res,next) =>{
    let error = new Error(), 
    locals={
        title: 'Error 404',
        description : 'Recurso no encontrado',
        error: error
    }
    error.status = 404
    res.render('error', locals)
    next()
}

module.exports = EmployeeController