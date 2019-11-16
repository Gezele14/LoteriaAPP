"use strict";

//Imports
var express = require("express");
var UserController = require("../controllers/user");

// Llamamos al router
var api = express.Router();
//var md_auth = require("../middlewares/authenticated");

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get("/user/:id", UserController.getUserbyid);
api.get("/user", UserController.getUser);


// Exportamos la configuración
module.exports = api;
