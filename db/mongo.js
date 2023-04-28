const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/apiSexta";

const db = mongoose.connect(URL);

mongoose.connection.on('connected', () => console.log('Conectado!'));
mongoose.connection.on('error', (erro) => console.log('Erro: ' + erro));

module.exports = db;
