//Users model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Defining schema for our Todo API
var UserSchema = Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});
//Exporting our model
var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;