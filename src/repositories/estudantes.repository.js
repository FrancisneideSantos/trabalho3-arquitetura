
function criarEstudantesRepository(prisma) {
  return {
    async listar() {
      return prisma.estudante.findMany({
        orderBy: {
          id: 'asc'
        }
      })
    },

    async buscarPorId(id) {
      return prisma.estudante.findUnique({
        where: { id }
      })
    },

    async criar(dados) {
      return prisma.estudante.create({
        data: {
          nome: dados.nome,
          matricula: dados.matricula,
          email: dados.email,
          telefone: dados.telefone
        }
      })
    },

    async atualizar(id, dados) {
      return prisma.estudante.update({
        where: { id },
        data: {
          nome: dados.nome,
          matricula: dados.matricula,
          email: dados.email,
          telefone: dados.telefone
        }
      })
    },

    async atualizarParcialmente(id, dados) {
      return prisma.estudante.update({
        where: { id },
        data: dados
      })
    },

    async remover(id) {
      return prisma.estudante.delete({
        where: { id }
      })
    }
  }
}

module.exports = { criarEstudantesRepository }
