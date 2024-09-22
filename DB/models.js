const mongoose = require("mongoose");

const user = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  mobile_no: {
    type: Number,
    require: true,
  },
  email: {
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
