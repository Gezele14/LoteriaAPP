"use strict";
//imports
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Routes path
var user_routes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var hola = "hola";

// Cargamos las rutas
app.use("/api", user_routes);

//Exports module
module.exports = app;
