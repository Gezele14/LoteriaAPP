"use strict";
var mongoose = require("mongoose");
var app = require("./app");

//Port for server
var port = 3800;

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/Test")
  .then(() => {
    console.log(
      "La conexión a la base de datos se ha realizado correctamente"
    );

    app.listen(port, () => {
      console.log("servidor corriendo en http://localhost:3800");
    });
  })
  .catch((err) => console.log(err));
