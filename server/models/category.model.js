const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "title is required"]
    },
}, { timestamps: true, versionKey: false })

const Category = new mongoose.model("Category", CategorySchema);


module.exports = Category;