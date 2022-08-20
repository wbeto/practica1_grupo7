if(process.platform == 'linux'){
	"use strict";
}


var express=require('express');

const bodyParser = require('body-parser');



var app=express();

app.use(express.urlencoded({ extended: true }))
//app.use(express.urlencoded({ extended: false }))
//app.use(express.json())
//app.use(bodyParser.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true);

//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

require('./require_glob')(express,app);

var server=app.listen(3000,function() {});