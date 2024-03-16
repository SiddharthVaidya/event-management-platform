var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is Mandatory"],
  },
  password: {
    type: String,
    required: [true, "Password is Mandatory"],
  },
  type: {
    type: String,
    required: [true, "Role is Mandatory"],
    enum: ["ADMIN", "USER"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", userSchema)