'use strict'

const express = require("express")
const productRouter = express.Router()
const ProductController = require("../controllers/product");

productRouter.get("/product", ProductController.getProductsAll);
productRouter.get("/product/:productId", ProductController.getProductById);
productRouter.post("/product", ProductController.insertProduct);
productRouter.put("/product/:productId", ProductController.updateProduct);
productRouter.delete("/product/:productId", ProductController.deleteProduct);

module.exports = productRouter