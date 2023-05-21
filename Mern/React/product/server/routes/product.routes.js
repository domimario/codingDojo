const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/product", ProductController.getAllProduct);
  app.post("/api/product", ProductController.createProduct);
  app.get("/api/product/:id", ProductController.getProduct);
};
