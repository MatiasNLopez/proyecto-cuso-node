'use strict'

const app = require('./app.js'),
    serve = app.listen(app.get('port'), ()=> {
        console.log(`Iniciando express en ${app.get('url_host')}`);
    });
