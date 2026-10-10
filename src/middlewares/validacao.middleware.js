
const validarLivro = (req, res, next) => {
  const { titulo, isbn, ano, exemplares, generoId } = req.body

  if (
    !titulo ||
    !isbn ||
    ano === undefined ||
    exemplares === undefined ||
    generoId === undefined
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem:
          'Título, ISBN, ano, exemplares e gênero são obrigatórios'
      }
    })
  }

  if (
    typeof titulo !== 'string' ||
    typeof isbn !== 'string' ||
    typeof ano !== 'number' ||
    typeof exemplares !== 'number' ||
    typeof generoId !== 'number'
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem:
          'Título e ISBN devem ser textos; ano, exemplares e gênero devem ser números'
      }
    })
  }

  next()
}

const validarEstudante = (req, res, next) => {
  const { nome, matricula, email, telefone } = req.body

  if (
    typeof nome !== 'string' ||
    !nome.trim() ||
    typeof matricula !== 'string' ||
    !matricula.trim()
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'Nome e matrícula são obrigatórios e devem ser textos válidos'
      }
    })
  }

  if (
    email !== undefined &&
    email !== null &&
    typeof email !== 'string'
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'O e-mail deve ser um texto'
      }
    })
  }

  if (
    telefone !== undefined &&
    telefone !== null &&
    typeof telefone !== 'string'
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'O telefone deve ser um texto'
      }
    })
  }

  next()
}

const dataValida = (valor) => {
  return (
    typeof valor === 'string' &&
    valor.trim() !== '' &&
    !Number.isNaN(Date.parse(valor))
  )
}

const validarEmprestimo = (req, res, next) => {
  const {
    livroId,
    estudanteId,
    dataPrevista,
    dataDevolucao,
    status
  } = req.body

  if (
    !Number.isInteger(livroId) ||
    livroId <= 0 ||
    !Number.isInteger(estudanteId) ||
    estudanteId <= 0 ||
    !dataValida(dataPrevista)
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem:
          'livroId e estudanteId devem ser números inteiros positivos, e dataPrevista deve ser uma data válida'
      }
    })
  }

  if (
    dataDevolucao !== undefined &&
    dataDevolucao !== null &&
    !dataValida(dataDevolucao)
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'dataDevolucao deve ser uma data válida ou nula'
      }
    })
  }

  if (
    status !== undefined &&
    (typeof status !== 'string' || !status.trim())
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'status deve ser um texto não vazio'
      }
    })
  }

  next()
}

const validarAtualizacaoParcialEmprestimo = (req, res, next) => {
  const camposPermitidos = [
    'livroId',
    'estudanteId',
    'dataPrevista',
    'dataDevolucao',
    'status'
  ]

  const camposEnviados = Object.keys(req.body)

  if (
    camposEnviados.length === 0 ||
    camposEnviados.some((campo) => !camposPermitidos.includes(campo))
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem:
          'Envie pelo menos um campo permitido: livroId, estudanteId, dataPrevista, dataDevolucao ou status'
      }
    })
  }

  const { livroId, estudanteId, dataPrevista, dataDevolucao, status } =
    req.body

  if (
    livroId !== undefined &&
    (!Number.isInteger(livroId) || livroId <= 0)
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'livroId deve ser um número inteiro positivo'
      }
    })
  }

  if (
    estudanteId !== undefined &&
    (!Number.isInteger(estudanteId) || estudanteId <= 0)
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'estudanteId deve ser um número inteiro positivo'
      }
    })
  }

  if (
    dataPrevista !== undefined &&
    !dataValida(dataPrevista)
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'dataPrevista deve ser uma data válida'
      }
    })
  }

  if (
    dataDevolucao !== undefined &&
    dataDevolucao !== null &&
    !dataValida(dataDevolucao)
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'dataDevolucao deve ser uma data válida ou nula'
      }
    })
  }

  if (
    status !== undefined &&
    (typeof status !== 'string' || !status.trim())
  ) {
    return res.status(400).json({
      erro: {
        codigo: 'DADOS_INVALIDOS',
        mensagem: 'status deve ser um texto não vazio'
      }
    })
  }

  next()
}

module.exports = {
  validarLivro,
  validarEstudante,
  validarEmprestimo,
  validarAtualizacaoParcialEmprestimo
}
