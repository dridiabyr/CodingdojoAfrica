const mongoose = require("mongoose");
const DB = "jokes";
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
//   const mongoose = require('mongoose');
//   const DB = "jokes";
  
//   mongoose.connect(mongodb://127.0.0.1:27017/${DB}, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//   })
//       .then(() => console.log('Established a connection to the database ' + DB))
//       .catch(err => console.log('Something went wrong when connecting to the database ', err));