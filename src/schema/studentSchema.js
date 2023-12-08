const mongoose = require("mongoose");

//Create a schema for the Student
const studentAccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default:'Student'
  },
  class: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  
  address: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
//   createdAt: {
//     type: Date,
//     default: () => getCurrentDateTimeUTCPlus6(),
//   },
//   modifiedAt: {
//     type: Date,
//     default: () => getCurrentDateTimeUTCPlus6(),
//   },
});

const StudentAccount = mongoose.model("StudentAccount", studentAccountSchema);
module.exports = StudentAccount;