'use strict'

const express = require("express"),
    path = require("path"),
    favicon = require("serve-favicon"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    expressOverrride = require("express-method-override")('_method'),
    routes = require("./routes/employee-routes"),
    config = require('./config/config'),
    publicDir = express.static(config.publicDir),
    app = express();

    app
        .set('views', config.viewDir)
        .set('view engine', 'pug')
        .set('port', config.port)
        .set('url_host', config.url_host)
        .use(favicon(config.faviconURL))
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended:false}))
        .use(expressOverrride)
        .use(morgan('dev'))
        .use(publicDir)
        .use('/',routes)
    
    module.exports = app