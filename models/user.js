const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: Number,
  age: Number,
  gender:String
//   gender: {
//     type: String,
//     enum: ["male", "female"],
//   },
});

const userModel=mongoose.model('user',userSchema)
module.exports=userModel;
