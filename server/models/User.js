const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  surname: {
    type: String,
    required: true,
    minLength: 2,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", UserSchema);