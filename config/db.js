const mongoose = require("mongoose");
const config = require("config");
const db = config.get("localmongodb");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("mongodb connected");
  } catch (error) {
    console.log("mongodb conn error");
    process.exit(1);
  }
};

module.exports = connectDB;
