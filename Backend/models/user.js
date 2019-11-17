"use strict";

//Import mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var UserSchema = Schema({
  name: String,
  gender: String,
  age: String,
  email: String,
});

//Exports module
module.exports = mongoose.model("User", UserSchema,"Users");

