//Users model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const nameSchema = require('./names');
const logger = require('../logger')('users_model');


// Defining schema for our Todo API
var UserSchema = Schema({
  name: {
    type: nameSchema,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    // unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Admin', 'Client'],
    default: 'Client'
  }
});

UserSchema.pre('save', (next) => {
  let user = this;
  logger('info', `Salting password for ${user}`);

  return next();
});

//Exporting our model
var UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;