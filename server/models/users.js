//Users model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const nameSchema = require('./names');


// Defining schema for our Todo API
var UserSchema = Schema({
  name: {
    type: nameSchema,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});
//Exporting our model
var UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;