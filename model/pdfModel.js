const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  verified:{
    type: String,
    enum: ['dean', 'student', 'tutor', 'principal',null],
  }
});
module.exports = mongoose.model("pdfFile", pdfSchema);
