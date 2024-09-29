const mongoose = require("mongoose");

const user = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  fullName: {
    type: String,
    require: true,
  },
  mobile_no: {
    type: Number,
    require: true,
    unique:true
  },
  email: {
    type: String,
    require: true,
    unique:true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", user);
module.exports = User;
