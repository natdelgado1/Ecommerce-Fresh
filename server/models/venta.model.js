const mongoose = require("mongoose");

const detailProductSchema = new mongoose.Schema({
    cantidad: { type: Number, required: true },
    product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true },
    talla: { type: String, required: true },
    price: { type: Number, required: true },
});

const VentaSchema = new mongoose.Schema(
    {
        clientId: {
            type: String,
            required: [true, "client is required"],
        },
        name: {
            type: String,
            required: [true, "name is required"],
        },
        city: {
            type: String,
            required: [true, "city is required"],
        },
        address: {
            type: String,
            required: [true, "address is required"],
        },
        email: {
            type: String,
            required: [true, "email is required"],
        },
        cel: {
            type: String,
            required: [true, "cel is required"],
        },
        envio: {
            type: Number,
            required: true,
            default: 0
        },
        entrega: {
            type: String,
            required: true,
            enum: ['retiro', 'domicilio'],
            default: 'domicilio'
        },
        estado:
        {
            type: String,
            required: true,
            enum: ['pendiente', 'finalizado', 'cancelado'],
            default: 'pendiente'
        },
        detailProduct: [detailProductSchema],
    }, { timestamps: true, versionKey: false }
);

const Venta = new mongoose.model("Venta", VentaSchema);
module.exports = Venta;
