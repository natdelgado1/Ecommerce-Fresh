const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/producto.controller')

//Create
router.post("", ProductController.createProduct);
// //Find All
router.get("", ProductController.findAllProducts);
// //Find All Lanzamientos
router.get("/lanzamientos", ProductController.findLanzamientos);
// //Find One
router.get("/:id", ProductController.findProduct);
//Find All marcas
router.get("/marcas/:marca", ProductController.findByMarca);
//Find All category
router.get("/category/:id", ProductController.findProductByCategory);
// //Delete One

//search product
router.get("/search/:keyword", ProductController.searchProduct);

module.exports = router;