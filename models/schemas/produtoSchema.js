const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjetoSchema = new Schema({
    codigo: Number,
    dataCriacao: { type: Date, default: Date.now },
    nome: { type: String, required: [true, "Nome é obrigatório!"]},
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cliente'
    },
    pedidos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pedido'
    }],
    produtos: [{
        produtoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'produto'
        },
        quantidade: Number,
        valorUnitario: Number
    }],
    valorTotal: Number
});

module.exports = ProjetoSchema;
