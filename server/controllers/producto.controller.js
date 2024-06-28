const Product = require("../models/producto.model");

//Función que busca todos los productos registrados
module.exports.findAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};
//Función que busca los lanzamientos 
module.exports.findLanzamientos = async (req, res) => {
    try {
        const products = await Product.find().sort({createdAt: -1}).limit(10);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};

//Función que busca un producto por su ID
module.exports.findProduct = async (req, res) => {
    try {
        const product = await Product.findOne({_id:req.params.id}).populate('category');
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error);
    }
};
//Función que busca y filtra los productos por marca
module.exports.findByMarca = async (req, res) => {
    try {
        const product = await Product.find({marca: req.params.marca}).populate('category');
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error);
    }
};

//Funcion que busca los productos por categoria

module.exports.findProductByCategory = async (req, res) => {
    try {
        const product = await Product.find({category:req.params.id}).populate('category');
        //console.log("buscando", req.params.id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error);
    }
};
//Función para guardar un producto
module.exports.createProduct = async (req, res) => {
   try {
    const newProduct = await Product.create(req.body);
        res.status(201);
        res.json(newProduct);
   } catch (error) {
    res.status(500).json(error);
   }
};

//Función que actualiza productos
module.exports.updateProduct = async (req, res) => {
try {
    const newProduct = await Product.create(req.body);
        res.status(201);
        res.json(newProduct);
} catch (error) {
    res.status(500).json(error);
}
};

// buscar producto
module.exports.searchProduct = async (req, res) => {
    try {
        const { keyword } = req.params;
        // Realiza la búsqueda en el título y la descripción utilizando expresiones regulares para una búsqueda insensible a mayúsculas y minúsculas
        const results = await Product.find({
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { marca: { $regex: keyword, $options: "i" } },
            ],
        }).select("-photo"); // Excluye la foto del resultado
        res.json(results);
    } catch (error) {
        console.error("Error en la API de búsqueda de productos:", error);
        res.status(400).send({
            success: false,
            message: "Error en la API de búsqueda de productos",
            error,
        });
    }
};




