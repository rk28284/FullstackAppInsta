require("dotenv").config();
const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://gsandha:gagangagan@cluster0.zhilydl.mongodb.net/Evaluation4?retryWrites=true&w=majority"
);
module.exports = {
  connection,
};
