const express = require("express");
const router = express.Router();
const {
  pdfUpload,
  upload,
  downloadPdf,
  verificationPdf,
  getPdf,
} = require("../controllers/controllerPdf");

router.route("/upload").post(upload.single("file"), pdfUpload); //upload pdf, id or name of input in frontend should be "file", 3 values name data(buffer) verified(initially null)
router.route("/download/:filename").get(downloadPdf); //to download pdf, eg localhost:5000/api/pdf/download/pdf123.pdf
router.route("/verify/:filename").put(verificationPdf); //to be used in dashboard, when verify button in each dashboard is clicked verified value will be updated with: 'dean', 'student', 'tutor', 'principal', value of verified is updated based on which type of user(role) is logged in
router.route("/list").get(getPdf); //to list down all the pdf in the database, to be used in dashboard of tutor,dean,principle

module.exports = router;
