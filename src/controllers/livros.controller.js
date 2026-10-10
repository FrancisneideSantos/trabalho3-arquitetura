
const { livrosService } = require('../config/container')

const livrosController = {
  listar: async (req, res) => {
    const livros = await livrosService.listar(req.query)
    res.json(livros)
  },

  buscarPorId: async (req, res) => {
    const id = parseInt(req.params.id, 10)
    const livro = await livrosService.buscarPorId(id)

    if (!livro) {
      return res.status(404).json({
        message: 'Livro não encontrado'
      })
    }

    res.json(livro)
  },

  criar: async (req, res) => {
    const livro = await livrosService.criar(req.body)
    res.status(201).json(livro)
  },

  atualizar: async (req, res) => {
    const id = parseInt(req.params.id, 10)
    const livro = await livrosService.atualizar(id, req.body)

    res.json(livro)
  },

  remover: async (req, res) => {
    const id = parseInt(req.params.id, 10)
    await livrosService.remover(id)

    res.json({
      message: 'Livro removido com sucesso'
    })
  }
}

module.exports = { livrosController }
