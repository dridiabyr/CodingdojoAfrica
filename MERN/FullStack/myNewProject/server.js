const express = require("express");
const app = express();
require("dotenv").config();
require('./config/product.config')
const port = process.env.PORT;


require("./routes/product.route")(app);
app.use(express.json(), express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`port is listeninig on  : ${port}`));
