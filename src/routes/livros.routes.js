const express = require('express')

const {
validarLivro
} = require('../middlewares/validacao.middleware')

const {
livrosController
} = require('../controllers/livros.controller')

const router = express.Router()

router.get('/livros', livrosController.listar)

router.get('/livros/:id', livrosController.buscarPorId)

router.post('/livros', validarLivro, livrosController.criar)

router.put('/livros/:id', validarLivro, livrosController.atualizar)

router.patch('/livros/:id', livrosController.atualizar)

router.delete('/livros/:id', livrosController.remover)

module.exports = router
