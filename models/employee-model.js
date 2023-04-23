'use estrict'

const { get, mongo } = require('mongoose');
const employees = require('./fakerData/fakerEmployees');

const config = require('../config/config').development,
    connMysql = require('./employees-mysql'),
    connMongo = require('./employees-mongoo');
    
Employee = () => {}

/* Mysql or mongo */

Employee.getAll = async (engineDB, cb) =>{
    
    try{
        const data =  engineDB === 'mysql' 
        ? await connMysql.findAll()
        : await connMongo.find();
        /* console.log(data); */
        cb(false, data)
    }
    catch(err){
        cb(err,{})
    }
    
}
Employee.getOne = async (engineDB, employeeId,cb) =>{
    let data = {}
    try{
        data =  engineDB === 'mysql' 
        ? await connMysql.findOne({ where: { _id: employeeId }})
        : await connMongo.findOne({_id: employeeId} );
        if(data.dataValues) data = data.dataValues
        
        cb(false,data)
        
    }
    catch(err){
        cb(err,{})
        
    }
}

Employee.save = async (engineDB, data, cb) =>{
    try {
        if(data._id){
            let _id = data._id
            delete data._id
            
            let dataUpdate = engineDB === 'mysql'
                ? await connMysql.update    (data, {where:{ _id}})
                : await connMongo.findOneAndUpdate({_id},data)
            
            /* console.log(`dataUpdate: ${dataUpdate}`); */
            cb(false, dataUpdate)
        } 
        else{
            engineDB === 'mysql'
            ? await connMysql.create(data)
            : await connMongo.create(data)
            cb(false, data)
        }
        
    } catch (err) {
        cb(err,{})
    }
}

Employee.delete = async (engineDB, id,cb) =>{
    console.log(engineDB);
    try{
        const data =  engineDB === 'mysql' 
        ? await connMysql.destroy({where: {_id: id}, individualHooks: true})
        : await connMongo.deleteOne({_id:id})
        
        if(data < 1)
            throw Error(`No existe el empleado con id: ${id}` )
        cb(false, data)
    }
    catch(err){
        cb(err, {})
    }
}

module.exports = Employee