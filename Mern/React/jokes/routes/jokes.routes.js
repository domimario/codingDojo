const JokerController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokerController.findAllJokes);
  app.post("/api/jokes", JokerController.createNewJokes);
  app.get("/api/jokes/:id", JokerController.findOneJokes);
  app.patch("/api/jokes/:id", JokerController.updateJokes);
  app.delete("/api/jokes/:id", JokerController.deleteAnExistingJokes);
};
