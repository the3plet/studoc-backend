const express = require("express");
const { getLogin } = require("../controllers/controllerLogin");
const router = express.Router();

router.route("/").post(getLogin);

module.exports = router;
