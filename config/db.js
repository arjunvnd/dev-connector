const mongoose = require("mongoose");
const config = require("config");

const db = config.get("monogoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log(`mongodb connected`);
  } catch (error) {
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;
