const JokesController = require("../controllers/jokes.controller");


module.exports = function (app) {
  app.get("/api", JokesController.getAllJokes);
  app.get("/api/getbyId" , JokesController.getjokeById)
  app.post("/api/createjokes", JokesController.createJoke);
  app.patch("/api/updateJokes", JokesController.updateJokes);
  app.delete("/api/deleteJokes", JokesController.deleteJokes);
};
