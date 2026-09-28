const express = require('express')

const {
  validarEstudante
} = require('../middlewares/validacao.middleware')

const {
  listarEstudantes,
  buscarEstudante,
  criarEstudante,
  atualizarEstudante,
  atualizarParcialmenteEstudante,
  excluirEstudante
} = require('../controllers/estudantes.controller')

const router = express.Router()

router.get('/estudantes', listarEstudantes)
router.get('/estudantes/:id', buscarEstudante)
router.post('/estudantes', validarEstudante, criarEstudante)
router.put('/estudantes/:id', validarEstudante, atualizarEstudante)
router.patch('/estudantes/:id', atualizarParcialmenteEstudante)
router.delete('/estudantes/:id', excluirEstudante)

module.exports = router