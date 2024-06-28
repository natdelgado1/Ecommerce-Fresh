const express = require('express');
const router = express.Router();

const VentasController = require('../controllers/venta.controller');

//crear venta
router.post("", VentasController.crearVenta);
//obtener venta
router.get("/:id", VentasController.obtenerVenta);
//obtener todas las ventas
router.get("", VentasController.obtenertodaslasVentas);
//obtener venta por cliente
router.get("/cliente/:clienteId", VentasController.obtenerVentaPorCliente);

module.exports = router;
