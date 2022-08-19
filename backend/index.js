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

require('./require_glob')(express,app);

var server=app.listen(3000,function() {});