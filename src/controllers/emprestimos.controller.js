
const { emprestimosService } = require('../config/container')

const responderErro = (res, error, next) => {
  if (error.code === 'P2025') {
    return res.status(404).json({
      erro: {
        codigo: 'RECURSO_NAO_ENCONTRADO',
        mensagem: 'Empréstimo não encontrado'
      }
    })
  }

  return next(error)
}

const listarEmprestimos = async (req, res, next) => {
  try {
    const emprestimos = await emprestimosService.listar()
    return res.status(200).json(emprestimos)
  } catch (error) {
    return responderErro(res, error, next)
  }
}

const buscarEmprestimo = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id, 10)
    const emprestimo = await emprestimosService.buscarPorId(id)

    if (!emprestimo) {
      return res.status(404).json({
        erro: {
          codigo: 'RECURSO_NAO_ENCONTRADO',
          mensagem: `Empréstimo com id ${id} não encontrado`
        }
      })
    }

    return res.status(200).json(emprestimo)
  } catch (error) {
    return responderErro(res, error, next)
  }
}

const criarEmprestimo = async (req, res, next) => {
  try {
    const novoEmprestimo = await emprestimosService.criar(req.body)
    return res.status(201).json(novoEmprestimo)
  } catch (error) {
    return responderErro(res, error, next)
  }
}

const atualizarEmprestimo = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id, 10)
    const emprestimo = await emprestimosService.atualizar(id, req.body)

    return res.status(200).json(emprestimo)
  } catch (error) {
    return responderErro(res, error, next)
  }
}

const atualizarParcialmenteEmprestimo = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id, 10)
    const emprestimo = await emprestimosService.atualizarParcialmente(
      id,
      req.body
    )

    return res.status(200).json(emprestimo)
  } catch (error) {
    return responderErro(res, error, next)
  }
}

const excluirEmprestimo = async (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id, 10)
    await emprestimosService.remover(id)

    return res.status(204).send()
  } catch (error) {
    return responderErro(res, error, next)
  }
}

const listarEmprestimosDoEstudante = async (req, res, next) => {
  try {
    const estudanteId = Number.parseInt(req.params.id, 10)

    const emprestimos = await emprestimosService.listarPorEstudante(
      estudanteId
    )

    if (emprestimos === null) {
      return res.status(404).json({
        erro: {
          codigo: 'RECURSO_NAO_ENCONTRADO',
          mensagem: `Estudante com id ${estudanteId} não encontrado`
        }
      })
    }

    return res.status(200).json(emprestimos)
  } catch (error) {
    return responderErro(res, error, next)
  }
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
