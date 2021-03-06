var mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    quote: { type: String }
  })
  
  const UserModel = mongoose.model('Users', userSchema);
  module.exports = UserModel;