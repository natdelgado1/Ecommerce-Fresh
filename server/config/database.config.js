const mongoose = require('mongoose');

const DB_NAME = "ProductosFresh";

mongoose.set('strictQuery', false);//importante
mongoose.connect(`mongodb://127.0.0.1/${DB_NAME}`, {
})
    .then(() => console.log("CONNECTED TO DB"))
    .catch(err => console.log("ERROR WITH DB: " + err))