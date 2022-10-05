// FUNCAO DO ARQUIVO : ARMAZENAR AS PRINCIPAIS IMPORTAÇÕES E INFORMAÇÕES DA APLICACAO

const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv-safe").config();

const db = require("./database/mongoConfig");
db.connect();

app.use(cors());
app.use(express.json());

//rotas do projeto
const clientsRoutes = require('./routes/clientRoutes')

//definir a rota principal
app.use("/clients", clientsRoutes);


module.exports = app;