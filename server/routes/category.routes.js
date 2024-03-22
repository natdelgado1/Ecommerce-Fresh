const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/category.controller')

// Create
router.post("", CategoryController.createCategory);
//Update
router.put("/:id", CategoryController.updateCategory);
//Find All
router.get("", CategoryController.findAllCategories);
//Find One
router.get("/:id", CategoryController.findCategory);
//Delete One
// router.delete("/:id", CategoryController.deleteCategory);


module.exports = router;