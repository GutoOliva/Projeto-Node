const express = require('express');
const mongoose = require('mongoose');

const clienteRouter = require('./routes/clienteRouter');
const produtoRouter = require('./routes/produtoRouter');
const pedidoRouter = require('./routes/pedidoRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/clientes', clienteRouter);
app.use('/produtos', produtoRouter);
app.use('/pedidos', pedidoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});