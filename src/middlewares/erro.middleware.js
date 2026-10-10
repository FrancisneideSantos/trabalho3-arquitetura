
function erroMiddleware(err, req, res, _next) {
  console.error(err)

  // Conflito com uma chave estrangeira.
  if (err.code === 'P2003') {
    return res.status(409).json({
      erro: 'CONFLITO',
      mensagem:
        'Não é possível excluir este registro porque ele está sendo utilizado em outro registro'
    })
  }

  // Registro não encontrado durante atualização ou exclusão.
  if (err.code === 'P2025') {
    return res.status(404).json({
      erro: 'NAO_ENCONTRADO',
      mensagem: 'Registro não encontrado'
    })
  }

  return res.status(500).json({
    erro: 'ERRO_INTERNO',
    mensagem: 'Ocorreu um erro interno no servidor'
  })
}

module.exports = erroMiddleware
