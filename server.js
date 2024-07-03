require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/login", require("./route/login"));
app.use("/api/pdf", require("./route/pdf"));

app.listen(PORT, () => {
  console.log("Server Succussfully Started");
});
