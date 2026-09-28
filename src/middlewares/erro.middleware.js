function erroMiddleware(err, req, res, next) {
  console.error(err)

  if (err.code === 'P2003') {
    return res.status(409).json({
      erro: 'CONFLITO',
      mensagem: 'Não é possível excluir este registro porque ele está sendo utilizado em outro registro'
    })
  }

  res.status(500).json({
    erro: 'ERRO_INTERNO',
    mensagem: 'Ocorreu um erro interno no servidor'
  })
}

module.exports = erroMiddleware