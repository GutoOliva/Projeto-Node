const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DcnSchema = new Schema({
    codigo: Number,
    descricao: { type: String, required:[true, 'Descrição é obrigatória!']},
    data: { type: Date, default: Date.now}
});

module.exports = mongoose.model('dcn', DcnSchema);