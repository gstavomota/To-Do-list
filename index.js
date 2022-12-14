require('dotenv').config();
const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const connectToDb = require('./database/db');
const routes = require('./routes/routes');

connectToDb();
const app = express();
const porta = process.env.PORT;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(urlencoded());
app.use(routes);

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}`)
});