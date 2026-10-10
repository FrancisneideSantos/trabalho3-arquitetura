
const { estudantesService } = require('../config/container')

const listarEstudantes = async (req, res) => {
  const estudantes = await estudantesService.listar()
  return res.status(200).json(estudantes)
}

const buscarEstudante = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10)
  const estudante = await estudantesService.buscarPorId(id)

  if (!estudante) {
    return res.status(404).json({
      erro: {
        codigo: 'NAO_ENCONTRADO',
        mensagem: 'Estudante não encontrado'
      }
    })
  }

  return res.status(200).json(estudante)
}

const criarEstudante = async (req, res) => {
  const estudante = await estudantesService.criar(req.body)
  return res.status(201).json(estudante)
}

const atualizarEstudante = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10)
  const estudante = await estudantesService.atualizar(id, req.body)

  return res.status(200).json(estudante)
}

const atualizarParcialmenteEstudante = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10)
  const estudante = await estudantesService.atualizarParcialmente(
    id,
    req.body
  )

  return res.status(200).json(estudante)
}

const excluirEstudante = async (req, res) => {
  const id = Number.parseInt(req.params.id, 10)
  await estudantesService.remover(id)

  return res.status(204).send()
}

module.exports = {
  listarEstudantes,
  buscarEstudante,
  criarEstudante,
  atualizarEstudante,
  atualizarParcialmenteEstudante,
  excluirEstudante
}
