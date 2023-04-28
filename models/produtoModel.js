const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  preco: { type: Number, required: true },
  estoque: { type: Number, default: 0 },
});

const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
