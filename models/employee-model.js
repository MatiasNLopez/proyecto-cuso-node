'use estrict'

const config = require('../config/config').development,
    connMysql = require('./employees-mysql'),
    connMongo = require('./employees-mongoo');
    
Employee = () => {}

/* Mysql or mongo */

Employee.getAll = async (dialect, cb) =>{
    const data =  dialect === 'mysql' 
        ? await connMysql.findAll()
        : await connMongo.find();
    /* console.log(data); */
    cb(data)

}
Employee.getOne = async (dialect, id) =>{
    
    const data =  dialect === 'mysql' 
        ? await connMysql.findOne({id: id})
        : await connMongo.findOne({id: id});
    
    cb(data)
}

Employee.save = (dialect, data, cb) =>{

}

Employee.delete = (deialect, id) =>{

}

module.exports = Employee