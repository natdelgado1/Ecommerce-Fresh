require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8585;

require('./config/database.config');


app.use(cookieParser());

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000","https://fresh-ecommerce-sigma.vercel.app"]
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));



const sessionRoutes = require('./routes/session.routes');
app.use("/api/session", sessionRoutes);

const userRoutes = require('./routes/user.routes');
app.use("/api/user", userRoutes);

const productRoutes = require('./routes/producto.routes');
app.use("/api/products", productRoutes);

const categoryRoutes = require('./routes/category.routes');
app.use("/api/categories", categoryRoutes);

const ventasRoutes = require('./routes/ventas.routes');
app.use("/api/ventas", ventasRoutes);


app.listen(port, () => console.log(`Listening on port: ${port}`));