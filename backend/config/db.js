const mongoose = require("mongoose");
const config = require("config");
//const db = config.get("mongoURI");
const db = "mongodb+srv://aymenbelhadjkacem:OzSNUpu2jidZwiLh@myschool.iplkk.mongodb.net/?retryWrites=true&w=majority&appName=myschool";
const connectDB = async () => {
  try {
    console.log(db)
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongDB Connected :D");
  } catch (err) {
    console.log(err);
    // Close server with failure.
    process.exit(1);
  }
};

module.exports = connectDB;
