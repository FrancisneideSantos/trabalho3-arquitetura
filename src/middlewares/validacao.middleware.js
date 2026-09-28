const validarLivro = (req, res, next) => {
  const { titulo, autor, ano } = req.body

  if (!titulo || !autor || ano === undefined) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'Título, autor e ano são obrigatórios'
      }
    })
  }

  if (
    typeof titulo !== 'string' ||
    typeof autor !== 'string' ||
    typeof ano !== 'number'
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'Título e autor devem ser texto e ano deve ser número'
      }
    })
  }

  next()
}

const validarEstudante = (req, res, next) => {
  const { nome, email } = req.body

  if (!nome || !email) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'Nome e email são obrigatórios'
      }
    })
  }

  if (typeof nome !== 'string' || typeof email !== 'string') {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'Nome e email devem ser texto'
      }
    })
  }

  next()
}

const validarEmprestimo = (req, res, next) => {
  const { livroId, estudanteId, dataEmprestimo } = req.body

  if (
    livroId === undefined ||
    estudanteId === undefined ||
    !dataEmprestimo
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'livroId, estudanteId e dataEmprestimo são obrigatórios'
      }
    })
  }

  if (
    typeof livroId !== 'number' ||
    typeof estudanteId !== 'number' ||
    typeof dataEmprestimo !== 'string'
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'livroId e estudanteId devem ser números e dataEmprestimo deve ser texto'
      }
    })
  }

  next()
}

module.exports = {
  validarLivro,
  validarEstudante,
  validarEmprestimo
}