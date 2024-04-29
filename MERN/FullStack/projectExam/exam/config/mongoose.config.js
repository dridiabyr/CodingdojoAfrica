const mongoose = require("mongoose");
const DB = "storefinder";
const mongoURI = `mongodb://localhost:27017/${DB}`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB CONNECTED"+ DB);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
