
const criarEmprestimosRepository = (prisma) => {
  const incluirRelacionamentos = {
    livro: {
      select: {
        id: true,
        titulo: true,
        isbn: true
      }
    },
    estudante: {
      select: {
        id: true,
        nome: true,
        matricula: true
      }
    }
  }

  const listar = () => {
    return prisma.emprestimo.findMany({
      include: incluirRelacionamentos,
      orderBy: {
        id: 'asc'
      }
    })
  }

  const buscarPorId = (id) => {
    return prisma.emprestimo.findUnique({
      where: { id },
      include: incluirRelacionamentos
    })
  }

  const criar = (dados) => {
    return prisma.emprestimo.create({
      data: {
        livroId: dados.livroId,
        estudanteId: dados.estudanteId,
        dataPrevista: new Date(dados.dataPrevista),
        ...(dados.dataDevolucao !== undefined
          ? {
              dataDevolucao: dados.dataDevolucao
                ? new Date(dados.dataDevolucao)
                : null
            }
          : {}),
        ...(dados.status !== undefined
          ? { status: dados.status }
          : {})
      },
      include: incluirRelacionamentos
    })
  }

  const atualizar = (id, dados) => {
    const data = {
      livroId: dados.livroId,
      estudanteId: dados.estudanteId,
      dataPrevista: new Date(dados.dataPrevista)
    }

    if (dados.dataDevolucao !== undefined) {
      data.dataDevolucao = dados.dataDevolucao
        ? new Date(dados.dataDevolucao)
        : null
    }

    if (dados.status !== undefined) {
      data.status = dados.status
    }

    return prisma.emprestimo.update({
      where: { id },
      data,
      include: incluirRelacionamentos
    })
  }

  const atualizarParcialmente = (id, dados) => {
    const data = {}

    if (dados.livroId !== undefined) {
      data.livroId = dados.livroId
    }

    if (dados.estudanteId !== undefined) {
      data.estudanteId = dados.estudanteId
    }

    if (dados.dataPrevista !== undefined) {
      data.dataPrevista = new Date(dados.dataPrevista)
    }

    if (dados.dataDevolucao !== undefined) {
      data.dataDevolucao = dados.dataDevolucao
        ? new Date(dados.dataDevolucao)
        : null
    }

    if (dados.status !== undefined) {
      data.status = dados.status
    }

    return prisma.emprestimo.update({
      where: { id },
      data,
      include: incluirRelacionamentos
    })
  }

  const remover = (id) => {
    return prisma.emprestimo.delete({
      where: { id }
    })
  }

  const listarPorEstudante = (estudanteId) => {
    return prisma.emprestimo.findMany({
      where: { estudanteId },
      include: incluirRelacionamentos,
      orderBy: {
        id: 'asc'
      }
    })
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
  criarEmprestimosRepository
}
