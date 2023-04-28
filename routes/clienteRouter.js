const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/clienteController');

router.get('/', ClienteController.listar);
router.get('/:id', ClienteController.buscarPorId);
router.post('/', ClienteController.salvar);
router.put('/:id', ClienteController.atualizar);
router.delete('/:id', ClienteController.excluir);

module.exports = router;
