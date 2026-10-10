
const express = require('express')

const {
  validarEmprestimo,
  validarAtualizacaoParcialEmprestimo
} = require('../middlewares/validacao.middleware')

const {
  listarEmprestimos,
  buscarEmprestimo,
  criarEmprestimo,
  atualizarEmprestimo,
  atualizarParcialmenteEmprestimo,
  excluirEmprestimo,
  listarEmprestimosDoEstudante
} = require('../controllers/emprestimos.controller')

const router = express.Router()

router.get('/emprestimos', listarEmprestimos)
router.get('/emprestimos/:id', buscarEmprestimo)
router.post('/emprestimos', validarEmprestimo, criarEmprestimo)
router.put('/emprestimos/:id', validarEmprestimo, atualizarEmprestimo)
router.patch(
  '/emprestimos/:id',
  validarAtualizacaoParcialEmprestimo,
  atualizarParcialmenteEmprestimo
)
router.delete('/emprestimos/:id', excluirEmprestimo)
router.get('/estudantes/:id/emprestimos', listarEmprestimosDoEstudante)

module.exports = router
