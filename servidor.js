const express = require("express");
const app = express();
app.use(express.json());
require('./db/mongo');

const clienteRouter = require('./routes/clienteRouter');
app.use('/clientes', clienteRouter);

const produtoRouter = require('./routes/produtoRouter');
app.use('/produtos', produtoRouter);

const pedidoRouter = require('./routes/pedidoRouter');
app.use('/pedidos', pedidoRouter);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
