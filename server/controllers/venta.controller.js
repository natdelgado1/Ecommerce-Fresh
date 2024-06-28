const Venta = require('../models/venta.model');
const Product = require('../models/producto.model');
const nodemailer = require("nodemailer");

const crearVenta = async (req, res) => {
    try {
        const nuevaVenta = new Venta(req.body);
        const ventaGuardada = await nuevaVenta.save();
        if(ventaGuardada){
            await ventaGuardada.detailProduct.forEach(async (detalle) => {
                // Obtén el producto de la base de datos
                const product = await Product.findById(detalle.product);
                product.stocks.map((stock) => {
                    console.log(stock);
                    console.log(detalle);
                    if(stock.talla === parseInt(detalle.talla)){
                        stock.stock -= detalle.cantidad;
                    }
                });
                // Guarda el producto actualizado en la base de datos
                await product.save();
              });
        }
        enviarCorreoVenta(ventaGuardada._id);
        res.status(201).json(ventaGuardada);
    } catch (error) {
        console.error(error);
    }
};

const obtenerVenta = async (req, res) => {
    try {
        const venta = await Venta.findById(req.params.id).populate('detailProduct.product');
        if (!venta) {
            return res.status(404).json({ mensaje: 'Venta no encontrada' });
        }
        res.json(venta);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};

const obtenertodaslasVentas = async (req, res) => {
    try {
        const ventas = await Venta.find().populate('detailProduct.product');
        res.status(200).json(ventas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};


const obtenerVentaPorCliente = async (req, res) => {
    try {
        const clienteId = req.params.clienteId;
        const ventas = await Venta.find({ clientId: clienteId }).populate('detailProduct.product');
        if (!ventas) {
            return res.status(404).json({ mensaje: 'Ventas no encontradas para este cliente' });
        }
        res.json(ventas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};


//Función para enviar el correo despues de realizar una venta */

async function enviarCorreoVenta(ventaId) {
    try {
        const venta = await Venta.findById(ventaId).populate("detailProduct.product");

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "gonzalezestefi094@gmail.com",
                pass: "sgdo rbym abhn tbda ",
        }, 
        });

        const mensaje = {
            from: "gonzalezestefi094@gmail.com",
            to: venta.email,
            subject: "Venta realizada exitosamente",
            html: `
            <p>Hola ${venta.name},</p>
            <p>Tu compra se ha realizado con éxito.</p>
            <p>Aquí está la información de tu compra:</p>
            <ul>
                ${venta.detailProduct.map(item => `<li>${item.cantidad} x ${item.product.name} - ${item.price}</li>`).join('')}
            </ul>
            <p>¡Gracias por tu compra!</p>
        `,
        };

        const info = await transporter.sendMail(mensaje);
        console.log("Correo electrónico enviado:",info.response);
    } catch (error) {
        console.error("Error al enviar el correo electronico", error);
    }
}

module.exports = {
    crearVenta,
    obtenerVenta,
    obtenertodaslasVentas,
    obtenerVentaPorCliente
};