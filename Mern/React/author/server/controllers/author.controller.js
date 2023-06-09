const Author = require("../models/author.model");

module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) => res.status(400).json(err));
};

module.exports.getAllAuthors = (req, res) => {
  Author.find({})
    .then((allAuthor) => res.json(allAuthor))
    .catch((err) => res.status(400).json(err));
};

module.exports.getOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidation: true,
  })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((deleteAuthor) => res.json(deleteAuthor))
    .catch((err) => res.status(400).json(err));
};
