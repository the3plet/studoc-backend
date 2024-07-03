const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({   //novalidation 
  name: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  },
  verified: {
    type: String,
    enum: ["dean", "student", "tutor", "principal", null],
  },
});

module.exports = mongoose.model("pdfFile", pdfSchema);
