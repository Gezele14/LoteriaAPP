"use strict";

//Import user model
var User = require("../models/user");

// Conseguir datos de un usuario
exports.getUserbyid = function(req, res) {
  var userId = req.params.id;
  //buscar un documento por un  id
  User.findById(userId, (err, user) => {
    if (err) return res.status(500).send({ message: "Error en la petición" });
    if (!user) return res.status(404).send({ message: "EL usuario no existe" });
    res.json(user)
  });
};

exports.getUser = function(req,res){
  User.find({gender: "male"},function(err, users) {
    //Si hay un error, lo regresamos
    if (err){
      res.send(err);
    }
    //Si no hay errores, regresamos los registros
    res.json(users);
  });
}

