'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var loginSchema = new Schema({
  Username: String,
  Password: String,
  Email: String
});

module.exports = mongoose.model('login', loginSchema);