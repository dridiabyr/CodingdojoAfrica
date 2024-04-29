const express = require("express");
require("./config/mongoose.config");

const app = express();
require("dotenv").config();
require("./config/mongoose.config");
const port = process.env.PORT;

app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/store.route")(app);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
