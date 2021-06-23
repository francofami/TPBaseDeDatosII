const express = require('express');
const conectarDB = require('./config/db');

// Creo el servidor
const app = express();

// Conectamos a la BD
conectarDB();

app.use('/api/ticket', require('./routes/ticket')); // localhost:4000/api/ticket

// Defino ruta principal
/*app.get('/', (req, res) => {
    res.send('Hola mundo');
})*/ // Cuando llamen al get

app.listen(4000, () => {
    console.log('El servidor funciona');
})