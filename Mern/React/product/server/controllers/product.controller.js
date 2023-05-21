const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.getAllProduct = (req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.getProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};
