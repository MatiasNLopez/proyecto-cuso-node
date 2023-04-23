'use estrict'

const { get, mongo } = require('mongoose');
const employees = require('./fakerData/fakerEmployees');

const config = require('../config/config').development,
    connMysql = require('./employees-mysql'),
    connMongo = require('./employees-mongoo');
    
Employee = () => {}

/* Mysql or mongo */

Employee.getAll = async (dialect, cb) =>{
    
    try{
        const data =  dialect === 'mysql' 
        ? await connMysql.findAll()
        : await connMongo.find();
        /* console.log(data); */
        cb(false, data)
    }
    catch(err){
        cb(err,{})
    }

}
Employee.getOne = async (dialect, employeeId,cb) =>{
    let data = {}
    try{
        data =  dialect === 'mysql' 
        ? await connMysql.findOne({ where: { _id: employeeId }})
        : await connMongo.findOne({ where: { _id: employeeId }});
        console.log(data);
        cb(false,data)
        
    }
    catch(err){
        cb(err,{})
        
    }
}

Employee.save = async (dialect, data, cb) =>{
    try {
        if(data._id){
            let _id = data._id
            delete data._id
            let dataUpdate = dialect === 'mysql'
                ? await connMysql.update(data, {where:{ _id}})
                : await connMongo.findOneAndUpdate(
                    {_id},
                    {data}
                )
            cb(false, dataUpdate)
        } 
        else{
            dialect === 'mysql'
            ? await connMysql.create(data)
            : await connMongo.create(data)
            cb(false, data)
        }
        
    } catch (err) {
        cb(err,{})
    }
}

Employee.delete = async (dialect, id,cb) =>{
    try{
        const data =  dialect === 'mysql' 
        ? await connMysql.destroy({where: {_id: id}, individualHooks: true})
        : await connMongo.deleteOne({_id:id})
        console.log(data);
        if(data < 1)
            throw Error(`No existe el empleado con id: ${id}` )
        cb(false, data)
    }
    catch(err){
        cb(err, {})
    }
}

module.exports = Employee