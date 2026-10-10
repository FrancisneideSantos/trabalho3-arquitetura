
function criarLivrosService(livrosRepository) {
  return {
    async listar(filtros) {
      return livrosRepository.listar(filtros)
    },

    async buscarPorId(id) {
      return livrosRepository.buscarPorId(id)
    },

    async criar(dadosDoLivro) {
      return livrosRepository.criar(dadosDoLivro)
    },

    async atualizar(id, dadosAtualizados) {
      return livrosRepository.atualizar(id, dadosAtualizados)
    },

    async remover(id) {
      return livrosRepository.remover(id)
    }
  }
}

module.exports = { criarLivrosService }
