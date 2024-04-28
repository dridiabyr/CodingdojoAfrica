const express = require("express");

const app = express();

let store = [
  { name: "1st and Washington", number: 123145, open: true },
  { name: "Weatherby Mall", number: 10323456, open: false },
];

app.get("/api/stores", (req, res) => {
  res.json(store);
});

app.post("/api/stores", (req, res) => {
  const newStore = req.body;
  store.push(newStore);
  res.json(newStore);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});