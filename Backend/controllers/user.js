"use strict";

//Import user model
var User = require("../models/user");

// Conseguir datos de un usuario
exports.getUserbyced = function(req, res) {
  var ced = req.params.id;
  //buscar un documento por un  id
  User.find(ced, (err, user) => {
    if (err) return res.status(500).send({ message: "001" });
    if (!user) return res.status(404).send({ message: "EL usuario no existe" });
    res.json(user)
  });
};

exports.getUser = function(req,res){
  var ced = req.params.id;


  User.findOne({ced: parseInt(ced)},function(err, users) {
    //Si hay un error, lo regresamos
    if (err){
      res.send("001");
    }
    //Si no hay errores, regresamos los registros
    res.json(users);
  });
}

