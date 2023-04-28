const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConteudoSchema = new Schema({
    codigo: Number,
    descricao: String
});

module.exports = mongoose.model('conteudo', ConteudoSchema);