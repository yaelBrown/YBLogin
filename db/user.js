var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  username:{
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.hashPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = function (password, hash) {
  return bcrypt.compareSync(password,hash);
}

module.exports = mongoose.model('users', userSchema, 'users');