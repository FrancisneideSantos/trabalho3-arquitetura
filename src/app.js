require('dotenv').config()

const express = require('express')

const path = require('path')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const swaggerDocument = YAML.load(
  path.join(__dirname, 'docs', 'openapi.yaml')
)

const erroMiddleware = require('./middlewares/erro.middleware')

const livrosRoutes = require('./routes/livros.routes')
const estudantesRoutes = require('./routes/estudantes.routes')
const emprestimosRoutes = require('./routes/emprestimos.routes')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'API da Biblioteca Escolar funcionando!'
  })
})
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(livrosRoutes)
app.use(estudantesRoutes)
app.use(emprestimosRoutes)
app.use(erroMiddleware)

app.listen(port, () => {
  console.log(`API REST rodando na porta ${port}`)
})