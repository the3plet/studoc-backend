const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.mongodb_url);
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
