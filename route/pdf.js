const express = require("express");
const router = express.Router();
const {
  pdfUpload,
  upload,
  downloadPdf,
  verificationPdf,
  getPdf,
} = require("../controllers/controllerPdf");

router.route("/upload").post(upload.single("file"), pdfUpload);
router.route("/download/:filename").get(downloadPdf);
router.route("/verify/:filename").get(verificationPdf);
router.route("/list").get(getPdf);

module.exports = router;
