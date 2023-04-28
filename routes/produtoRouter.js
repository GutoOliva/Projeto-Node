const prudutoController = require('../controllers/prudutoController');
const express = require('express');
const router = express.Router();

router.get('/', prudutoController.listar);
router.get('/:id', prudutoController.buscarPorId);
router.post('/', prudutoController.salvar);
router.put('/:id', prudutoController.atualizar);
router.delete('/:id', prudutoController.excluir);

module.exports = router;
