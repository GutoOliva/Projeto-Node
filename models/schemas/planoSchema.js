const mongoose = require('mongoose');
const CursoSchema = require('./schemas/cursoSchema');
const Schema = mongoose.Schema;

const PlanoSchema = new Schema({
    codigo: Number,
    disciplina: { type: String, required: [true, "Discplina é obrigatória!"]},
    ementa: { type: String, required: [true, "Ementa é obrigatória!"]},
    periodo: Number,
    curso: CursoSchema  
});

module.exports = mongoose.model('plano', PlanoSchema);