'use strict'

const config = require('./config/config')
const app = require('./app.js'),
    serve = app.listen(app.get('port'), ()=> {
        if(config.enviroment === config.eviromentMode.develop ) 
            console.log(`Iniciando express en ${app.get('url_host')}`);
    });
