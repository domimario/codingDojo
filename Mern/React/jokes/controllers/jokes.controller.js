const Jokes = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Jokes.find()
    .then((allJokes) => {
      res.json({ jokes: allJokes });
    })
    .catch((err) => {
      res.json({ message: "error", error: err });
    });
};

module.exports.createNewJokes = (req, res) => {
  Jokes.create(req.body)
    .then((newlyCreatedJokes) => {
      res.json({ jokes: newlyCreatedJokes });
    })
    .catch((err) => {
      res.json({ message: "error", error: err });
    });
};

module.exports.findOneJokes = (req, res) => {
  Jokes.findOne({ _id: req.params.id })
    .then((oneJokes) => {
      res.json({ jokes: oneJokes });
    })
    .catch((err) => {
      res.json({ message: "error", error: err });
    });
};

module.exports.updateJokes = (req, res) => {
  Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJokes) => {
      res.json({ jokes: updatedJokes });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

module.exports.deleteAnExistingJokes = (req, res) => {
  Jokes.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ jokes: result });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};
