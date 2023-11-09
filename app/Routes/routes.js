const express = require('express');
const router = express.Router();
const SeriesController = require('../controllers/serieController');
const AluguelController = require('../controllers/aluguelController');

// SeriesController
router.get('/series', SeriesController.list);

// Rota para obter detalhes de uma série específica
router.get('/:serieId', SeriesController.get);

// Rota para adicionar uma nova série
router.post('/series', SeriesController.create);

// Rota para atualizar uma série
router.put('/:serieId', SeriesController.update);

// Rota para excluir uma série
router.delete('/:serieId', SeriesController.delete);

// AluguelController
router.post('/aluguel', AluguelController.create);

// Rota para listar aluguéis
router.get('/aluguel', AluguelController.list);

// Rota para devolver um aluguel
router.put('/:aluguelId/devolver', AluguelController.devolver);


module.exports = router;
