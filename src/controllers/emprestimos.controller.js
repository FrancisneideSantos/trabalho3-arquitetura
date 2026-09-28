const { emprestimos, livros, estudantes } = require('../data/db-memoria')

let proximoId = 2

const listarEmprestimos = (req, res) => {
  res.status(200).json(emprestimos)
}

const buscarEmprestimo = (req, res) => {
  const id = parseInt(req.params.id)
  const emprestimo = emprestimos.find(item => item.id === id)

  if (!emprestimo) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Empréstimo com id ${id} não encontrado`
      }
    })
  }

  res.status(200).json(emprestimo)
}

const criarEmprestimo = (req, res) => {
  const { livroId, estudanteId, dataEmprestimo } = req.body

  if (!livroId || !estudanteId || !dataEmprestimo) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'livroId, estudanteId e dataEmprestimo são obrigatórios'
      }
    })
  }

  const livro = livros.find(item => item.id === livroId)
  const estudante = estudantes.find(item => item.id === estudanteId)

  if (!livro) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Livro com id ${livroId} não encontrado`
      }
    })
  }

  if (!estudante) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Estudante com id ${estudanteId} não encontrado`
      }
    })
  }

  const novoEmprestimo = {
    id: proximoId++,
    livroId,
    estudanteId,
    dataEmprestimo
  }

  emprestimos.push(novoEmprestimo)

  res.status(201).json(novoEmprestimo)
}

const atualizarEmprestimo = (req, res) => {
  const id = parseInt(req.params.id)
  const emprestimo = emprestimos.find(item => item.id === id)

  if (!emprestimo) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Empréstimo com id ${id} não encontrado`
      }
    })
  }

  const { livroId, estudanteId, dataEmprestimo } = req.body

  if (!livroId || !estudanteId || !dataEmprestimo) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'livroId, estudanteId e dataEmprestimo são obrigatórios'
      }
    })
  }

  emprestimo.livroId = livroId
  emprestimo.estudanteId = estudanteId
  emprestimo.dataEmprestimo = dataEmprestimo

  res.status(200).json(emprestimo)
}

const atualizarParcialmenteEmprestimo = (req, res) => {
  const id = parseInt(req.params.id)
  const emprestimo = emprestimos.find(item => item.id === id)

  if (!emprestimo) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Empréstimo com id ${id} não encontrado`
      }
    })
  }

  const { livroId, estudanteId, dataEmprestimo } = req.body

  if (livroId !== undefined) emprestimo.livroId = livroId
  if (estudanteId !== undefined) emprestimo.estudanteId = estudanteId
  if (dataEmprestimo !== undefined) emprestimo.dataEmprestimo = dataEmprestimo

  res.status(200).json(emprestimo)
}

const excluirEmprestimo = (req, res) => {
  const id = parseInt(req.params.id)
  const index = emprestimos.findIndex(item => item.id === id)

  if (index === -1) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Empréstimo com id ${id} não encontrado`
      }
    })
  }

  emprestimos.splice(index, 1)

  res.status(204).send()
}

const listarEmprestimosDoEstudante = (req, res) => {
  const estudanteId = parseInt(req.params.id)

  const estudante = estudantes.find(item => item.id === estudanteId)

  if (!estudante) {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: `Estudante com id ${estudanteId} não encontrado`
      }
    })
  }

  const resultado = emprestimos.filter(
    emprestimo => emprestimo.estudanteId === estudanteId
  )

  res.status(200).json(resultado)
}

module.exports = {
  listarEmprestimos,
  buscarEmprestimo,
  criarEmprestimo,
  atualizarEmprestimo,
  atualizarParcialmenteEmprestimo,
  excluirEmprestimo,
  listarEmprestimosDoEstudante
}