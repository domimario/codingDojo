const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json(err));
};

module.exports.getAllProduct = (req, res) => {
  Product.find({})
    .then((allProduct) => res.json(allProduct))
    .catch((err) => res.json(err));
};

module.exports.getProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((oneProduct) => {
      console.log(oneProduct);
      res.json(oneProduct);
    })
    .catch((err) => res.json(err));
};

module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updateProduct) => {
      console.log(updateProduct);
      res.json(updateProduct);
    })
    .catch((err) => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deletedProduct) => {
      console.log(deletedProduct);
      res.json(deletedProduct);
    })
    .catch((err) => res.json(err));
};
