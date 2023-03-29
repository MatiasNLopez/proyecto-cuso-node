'use strict'

const express = require("express"),
    favicon = require("serve-favicon"),
    bodyParser = require("body-parser"),
    morgan = require("morgan"),
    expressOverrride = require("express-method-override"),
    routes = require("./routes/userRoutes"),
    faviconURL = '',
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    app = express();

    app
        .set('views', viewDir)
        .set('view engine', 'pug')
        .set('port', process.env.PORT)
        .use(favicon(faviconURL))
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended:false}))
        .use(expressOverrride)
        .use(morgan('dev'))
        .use(publicDir)
        .use('/',routes)
    
    module.exports = app