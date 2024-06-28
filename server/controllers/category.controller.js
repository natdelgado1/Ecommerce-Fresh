const Category = require("../models/category.model");
const Product = require("../models/producto.model");

//Función que busca todas las categorías registrados
module.exports.findAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Función que busca una categoría por su ID
module.exports.findCategory = async (req, res) => {
    try {
        const category = await Category.findOne({_id:req.params.id});
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json(error);
    }
};

//Función para guardar una categoría
module.exports.createCategory = async (req, res) => {
   try {
    const newCategory = await Category.create(req.body);
        res.status(201);
        res.json(newCategory);
   } catch (error) {
    res.status(500).json(error);
   }
};

//Función que actualiza una categoría
module.exports.updateCategory = async (req, res) => {
try {
    const newCategory = await Category.create(req.body);
        res.status(201);
        res.json(newCategory);
} catch (error) {
    res.status(500).json(error);
}
};
