'use estrict'

const employees = require('./fakerData/fakerEmployees');

const config = require('../config/config'),
    connMysql = config.dbConnection.dbEngine === 'mysql'? require('./employees-mysql') : null,
    connMongo = config.dbConnection.dbEngine === 'mongo' ? require('./employees-mongoo') : null;
    
Employee = () => {}

/* Mysql or mongo */

Employee.getAll = async (cb) =>{
    try{
        if (!connMongo && !connMysql) throw 'No coneccition Database'
        const data =  connMysql
        ? await connMysql.findAll()
        : await connMongo.find();
        /* console.log(data); */
        cb(false, data)
    }
    catch(err){
        cb(err,{})
    }
    
}
Employee.getOne = async (employeeId,cb) =>{
    
    let data = {}
    try{
        if (!connMongo && !connMysql) throw 'No coneccition Database'
        data =  connMysql 
        ? await connMysql.findOne({ where: { _id: employeeId }})
        : await connMongo.findOne({_id: employeeId} );
        if(data.dataValues) data = data.dataValues
        
        cb(false,data)
        
    }
    catch(err){
        cb(err,{})
        
    }
}

Employee.save = async (data, cb) =>{
    
    try {
        if (!connMongo && !connMysql) throw 'No coneccition Database'

        if(data._id){
            let _id = data._id
            delete data._id
            
            let dataUpdate = connMysql
                ? await connMysql.update    (data, {where:{ _id}})
                : await connMongo.findOneAndUpdate({_id},data)
            
            /* console.log(`dataUpdate: ${dataUpdate}`); */
            cb(false, dataUpdate)
        } 
        else{
            connMysql
            ? await connMysql.create(data)
            : await connMongo.create(data)
            cb(false, data)
        }
        
    } catch (err) {
        cb(err,{})
    }
}

Employee.delete = async (id,cb) =>{
    try{
        if (!connMongo && !connMysql) throw 'No coneccition Database'

        const data =  connMysql
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