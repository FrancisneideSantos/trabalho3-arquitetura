
const criarEmprestimosService = (
  emprestimosRepository,
  estudantesRepository
) => {
  const listar = () => {
    return emprestimosRepository.listar()
  }

  const buscarPorId = (id) => {
    return emprestimosRepository.buscarPorId(id)
  }

  const criar = (dados) => {
    return emprestimosRepository.criar(dados)
  }

  const atualizar = (id, dados) => {
    return emprestimosRepository.atualizar(id, dados)
  }

  const atualizarParcialmente = (id, dados) => {
    return emprestimosRepository.atualizarParcialmente(id, dados)
  }

  const remover = (id) => {
    return emprestimosRepository.remover(id)
  }

  const listarPorEstudante = async (estudanteId) => {
    const estudante = await estudantesRepository.buscarPorId(estudanteId)

    if (!estudante) {
      return null
    }

    return emprestimosRepository.listarPorEstudante(estudanteId)
  }

  return {
    listar,
    buscarPorId,
    criar,
    atualizar,
    atualizarParcialmente,
    remover,
    listarPorEstudante
  }
}

module.exports = {
  criarEmprestimosService
}
