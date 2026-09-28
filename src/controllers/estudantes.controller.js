const { estudantes } = require('../data/db-memoria')

let proximoId = 3

const listarEstudantes = (req, res) => {
  res.status(200).json(estudantes)
}

const buscarEstudante = (req, res) => {
  const id = parseInt(req.params.id)
  const estudante = estudantes.find(estudante => estudante.id === id)

  if (!estudante) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Estudante com id ${id} não encontrado`
      }
    })
  }

  res.status(200).json(estudante)
}

const criarEstudante = (req, res) => {
  const { nome, email } = req.body

  if (!nome || !email) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'Nome e email são obrigatórios'
      }
    })
  }

  const existente = estudantes.find(
    estudante => estudante.email.toLowerCase() === email.toLowerCase()
  )

  if (existente) {
    return res.status(409).json({
      erro: {
        codigo: 'RECURSO_DUPLICADO',
        mensagem: 'Email já cadastrado'
      }
    })
  }

  const novoEstudante = {
    id: proximoId++,
    nome,
    email
  }

  estudantes.push(novoEstudante)

  res.status(201).json(novoEstudante)
}

const atualizarEstudante = (req, res) => {
  const id = parseInt(req.params.id)
  const estudante = estudantes.find(estudante => estudante.id === id)

  if (!estudante) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Estudante com id ${id} não encontrado`
      }
    })
  }

  const { nome, email } = req.body

  if (!nome || !email) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'Nome e email são obrigatórios'
      }
    })
  }

  estudante.nome = nome
  estudante.email = email

  res.status(200).json(estudante)
}

const atualizarParcialmenteEstudante = (req, res) => {
  const id = parseInt(req.params.id)
  const estudante = estudantes.find(estudante => estudante.id === id)

  if (!estudante) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Estudante com id ${id} não encontrado`
      }
    })
  }

  const { nome, email } = req.body

  if (nome !== undefined) estudante.nome = nome
  if (email !== undefined) estudante.email = email

  res.status(200).json(estudante)
}

const excluirEstudante = (req, res) => {
  const id = parseInt(req.params.id)
  const index = estudantes.findIndex(estudante => estudante.id === id)

  if (index === -1) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Estudante com id ${id} não encontrado`
      }
    })
  }

  estudantes.splice(index, 1)

  res.status(204).send()
}

module.exports = {
  listarEstudantes,
  buscarEstudante,
  criarEstudante,
  atualizarEstudante,
  atualizarParcialmenteEstudante,
  excluirEstudante
}