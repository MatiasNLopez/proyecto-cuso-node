'use strict'

const express = require("express"),
    favicon = require("serve-favicon"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    expressOverrride = require("express-method-override")('_method'),
    routes = require("./routes/employee-routes"),
    faviconURL = `${__dirname}/public/img/favicon.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = process.env.PORT || 3000, 
    app = express();

    app
        .set('views', viewDir)
        .set('view engine', 'pug')
        .set('port', port)
        .use(favicon(faviconURL))
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended:false}))
        .use(expressOverrride)
        .use(morgan('dev'))
        .use(publicDir)
        .use('/',routes)
    
    module.exports = app