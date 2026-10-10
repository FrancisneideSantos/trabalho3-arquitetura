
function criarEstudantesService(estudantesRepository) {
  return {
    async listar() {
      return estudantesRepository.listar()
    },

    async buscarPorId(id) {
      return estudantesRepository.buscarPorId(id)
    },

    async criar(dados) {
      return estudantesRepository.criar(dados)
    },

    async atualizar(id, dados) {
      return estudantesRepository.atualizar(id, dados)
    },

    async atualizarParcialmente(id, dados) {
      return estudantesRepository.atualizarParcialmente(id, dados)
    },

    async remover(id) {
      return estudantesRepository.remover(id)
    }
  }
}

module.exports = { criarEstudantesService }
