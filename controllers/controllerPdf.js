const multer = require("multer");
const pdfFile = require("../model/pdfModel");

const storage = multer.memoryStorage();
const upload = multer({ storage });

//Upload handler
//POST
const pdfUpload = async (req, res) => {
  try {
    const { originalname, buffer } = req.file; // deconstructing assignment 
    const newUpload = new pdfFile({
      name: originalname,
      data: buffer,
      verified: null,
    });
    await newUpload.save();
    res.status(201).send("File uploaded successfully!" + newUpload);
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).send("Error uploading file");
  }
};

//Download Handler
//GET
const downloadPdf = async (req, res) => {
  try {
    const { filename } = req.params;                         
    const file = await pdfFile.findOne({ name: filename });
    if (!file) {
      return res.status(404).send("File not found");
    }
    res.contentType("application/pdf");
    res.send(file.data);
  } catch (err) {
    console.error("Error downloading PDF:", err);
    res.status(500).send("Error downloading PDF");
  }
};

//Verify Handler
//GET
const verificationPdf = async (req, res) => {
  try {
    const { filename } = req.params;
    const file = await pdfFile.findOne({ name: filename });
    if (!file) {
      return res.status(404).send("File not found");
    }
    file.verified = req.cookies.verified;
    await file.save();
    console.log("Verification status updated");
  } catch (error) {
    console.log(error);
  }
};

//List Handler
//PUT
const getPdf = async (req, res) => {
  try {
    list = await pdfFile.find();
    res.json(list);
    console.log(list);
  } catch (error) {}
};
module.exports = { pdfUpload, upload, downloadPdf, verificationPdf, getPdf };
