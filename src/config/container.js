
const { prisma } = require('../../prisma/prisma')

const {
  criarLivrosRepository
} = require('../repositories/livros.repository')
const {
  criarLivrosService
} = require('../services/livros.service')

const {
  criarEstudantesRepository
} = require('../repositories/estudantes.repository')
const {
  criarEstudantesService
} = require('../services/estudantes.service')

const {
  criarEmprestimosRepository
} = require('../repositories/emprestimos.repository')
const {
  criarEmprestimosService
} = require('../services/emprestimos.service')

// Dependências de livros.
const livrosRepository = criarLivrosRepository(prisma)
const livrosService = criarLivrosService(livrosRepository)

// Dependências de estudantes.
const estudantesRepository = criarEstudantesRepository(prisma)
const estudantesService = criarEstudantesService(estudantesRepository)

// Dependências de empréstimos.
const emprestimosRepository = criarEmprestimosRepository(prisma)

const emprestimosService = criarEmprestimosService(
  emprestimosRepository,
  estudantesRepository
)

// Centraliza as dependências da aplicação.
const container = {
  prisma,
  livrosRepository,
  livrosService,
  estudantesRepository,
  estudantesService,
  emprestimosRepository,
  emprestimosService
}

module.exports = container
