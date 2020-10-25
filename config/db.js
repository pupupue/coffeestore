const mongoose = require("mongoose");
const config = require("config");
// const db = config.get("localmongodb");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("DB connection succesfull");
  } catch (error) {
    console.log("DB connection error");
    process.exit(1);
  }
};

module.exports = connectDB;
