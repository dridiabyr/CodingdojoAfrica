const express = require("express");
 require('./config/mongoose.config');

const app = express();

const port = 3000;

app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/Jokes.routes")(app);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
