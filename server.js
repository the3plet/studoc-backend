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

app.use("/api/login", require("./route/login")); //auth route
app.use("/api/pdf", require("./route/pdf")); //document route

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
