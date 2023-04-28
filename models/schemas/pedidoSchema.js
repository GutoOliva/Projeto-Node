const express = require('express');
const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  produtos: [{
    produto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Produto',
      required: true
    },
    quantidade: {
      type: Number,
      required: true,
      min: 1
    }
  }],
  valorTotal: {
    type: Number,
    required: true,
    min: 0
  },
  dataCriacao: {
    type: Date,
    default: Date.now
  },
  dataAtualizacao: {
    type: Date,
    default: Date.now
  }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);