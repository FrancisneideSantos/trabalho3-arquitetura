# API da Biblioteca Escolar

## 1. Sobre o projeto

Este projeto foi desenvolvido para a disciplina de Desenvolvimento de Software 2. O objetivo é criar uma API REST para ajudar no gerenciamento de uma biblioteca escolar.

A API permite cadastrar e consultar livros, autores, gêneros literários, estudantes e empréstimos. Também é possível atualizar e excluir registros, buscar livros por título, filtrar por gênero e organizar os resultados usando paginação e ordenação.

No Trabalho 2, o foco foi utilizar o PostgreSQL e o Prisma ORM para guardar os dados no banco de dados. No Trabalho 3, o projeto foi reorganizado para separar melhor as responsabilidades de cada parte do código, utilizando uma arquitetura em camadas e padrões de projeto.

## 2. Tecnologias utilizadas

As principais tecnologias utilizadas no projeto são:

- **Node.js:** permite executar o JavaScript no servidor.
- **Express:** ajuda a criar as rotas e organizar as requisições da API.
- **PostgreSQL:** banco de dados utilizado para armazenar as informações.
- **Prisma ORM:** facilita o acesso ao banco de dados por meio do JavaScript.
- **OpenAPI:** utilizada para descrever os endpoints, os parâmetros e as respostas da API.
- **Swagger UI:** ferramenta relacionada à visualização da documentação da API.
- **YAML:** formato utilizado no arquivo de documentação OpenAPI.
- **Dotenv:** permite carregar configurações armazenadas em variáveis de ambiente.
- **Nodemon:** reinicia o servidor automaticamente durante o desenvolvimento.
- **ESLint:** verifica problemas no código e ajuda a manter um padrão de escrita.

## 3. Recursos da API

A API possui cinco recursos principais: livros, autores, gêneros, estudantes e empréstimos.

### 3.1. Livros

Representam os livros cadastrados na biblioteca.

Entre os principais campos estão:

- `id`: identificador do livro.
- `titulo`: título do livro.
- `isbn`: código de identificação do livro.
- `ano`: ano de publicação.
- `exemplares`: quantidade de exemplares disponíveis no cadastro.
- `generoId`: identificação do gênero relacionado ao livro.
- `criadoEm`: data de criação do registro.
- `atualizadoEm`: data da última atualização.

### 3.2. Autores

Representam os autores dos livros.

Principais campos:

- `id`: identificador do autor.
- `nome`: nome do autor.
- `anoNascimento`: ano de nascimento do autor.

### 3.3. Gêneros

Representam os gêneros literários dos livros.

Principais campos:

- `id`: identificador do gênero.
- `nome`: nome do gênero literário.

### 3.4. Estudantes

Representam os estudantes cadastrados na biblioteca.

Principais campos:

- `id`: identificador do estudante.
- `nome`: nome do estudante.
- `matricula`: número de matrícula.
- `email`: e-mail do estudante.
- `telefone`: telefone do estudante.
- `ativo`: indica se o cadastro está ativo.

### 3.5. Empréstimos

Representam os empréstimos realizados pelos estudantes.

Principais campos:

- `id`: identificador do empréstimo.
- `livroId`: identificação do livro emprestado.
- `estudanteId`: identificação do estudante.
- `dataRetirada`: data da retirada do livro.
- `dataPrevista`: data prevista para devolução.
- `dataDevolucao`: data em que o livro foi devolvido, quando aplicável.
- `status`: situação do empréstimo.

## 4. Relacionamentos entre as entidades

O banco de dados possui seis entidades principais:

- `Genero`
- `Autor`
- `Livro`
- `LivroAutor`
- `Estudante`
- `Emprestimo`

Os relacionamentos funcionam da seguinte maneira:

- Um gênero pode estar relacionado a vários livros, mas cada livro pertence a um gênero.
- Um livro pode ter vários autores, e um autor pode escrever vários livros.
- A tabela `LivroAutor` faz a ligação entre livros e autores.
- Um estudante pode ter vários empréstimos.
- Um livro pode aparecer em vários empréstimos ao longo do tempo.

Esses relacionamentos ajudam a organizar os dados e evitam que todas as informações precisem ficar em uma única tabela.

## 5. Endpoints da API

Os endpoints são os caminhos utilizados para acessar os recursos da API.

### 5.1. Livros

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/livros` | Lista os livros. |
| GET | `/livros/:id` | Busca um livro pelo ID. |
| POST | `/livros` | Cadastra um livro. |
| PUT | `/livros/:id` | Atualiza um livro. |
| PATCH | `/livros/:id` | Atualiza parte dos dados de um livro. |
| DELETE | `/livros/:id` | Exclui um livro. |

### 5.2. Estudantes

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/estudantes` | Lista os estudantes. |
| GET | `/estudantes/:id` | Busca um estudante pelo ID. |
| POST | `/estudantes` | Cadastra um estudante. |
| PUT | `/estudantes/:id` | Atualiza um estudante. |
| PATCH | `/estudantes/:id` | Atualiza parte dos dados de um estudante. |
| DELETE | `/estudantes/:id` | Exclui um estudante. |

### 5.3. Empréstimos

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/emprestimos` | Lista os empréstimos. |
| GET | `/emprestimos/:id` | Busca um empréstimo pelo ID. |
| POST | `/emprestimos` | Cadastra um empréstimo. |
| PUT | `/emprestimos/:id` | Atualiza um empréstimo. |
| PATCH | `/emprestimos/:id` | Atualiza parte dos dados de um empréstimo. |
| DELETE | `/emprestimos/:id` | Exclui um empréstimo. |

### 5.4. Empréstimos de um estudante

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/estudantes/:id/emprestimos` | Lista os empréstimos de um estudante. |

## 6. Busca, filtros, paginação e ordenação

A consulta de livros possui recursos que facilitam a busca das informações.

### Busca por título

Para buscar livros que correspondam a um título, pode ser utilizado:

`GET /livros?titulo=Dom`

### Filtro por gênero

Para buscar livros de determinado gênero:

`GET /livros?genero=Romance`

### Paginação

A paginação permite dividir os resultados em partes menores.

Exemplo:

`GET /livros?pagina=1&limite=2`

Nesse exemplo, a consulta solicita a primeira página com até dois livros.

A resposta da listagem inclui os dados encontrados e as informações de paginação.

### Ordenação

A ordenação permite organizar os resultados por um campo.

Exemplo:

`GET /livros?ordenar=titulo&direcao=desc`

Nesse caso, os resultados são ordenados pelo título em ordem decrescente.

Os parâmetros de busca, filtro, paginação e ordenação podem ser combinados conforme as opções implementadas na API.

## 7. Validação e tratamento de erros

A API possui middlewares para validar os dados recebidos e tratar erros das requisições.

As validações ajudam a verificar campos obrigatórios e informações necessárias para cadastrar ou atualizar registros.

Também são tratados erros relacionados a registros inexistentes e a relacionamentos entre entidades.

Alguns códigos HTTP utilizados são:

| Código | Significado |
|---|---|
| 200 | Requisição realizada com sucesso. |
| 201 | Registro criado com sucesso. |
| 204 | Operação realizada sem conteúdo na resposta, como uma exclusão. |
| 400 | Dados enviados inválidos. |
| 404 | Registro não encontrado. |
| 409 | Conflito com uma regra de integridade do banco de dados. |
| 500 | Erro interno do servidor. |

O tratamento de erros ajuda a retornar respostas mais claras quando alguma operação não pode ser concluída.

## 8. Banco de dados, Prisma e migrações

O PostgreSQL é utilizado para armazenar os dados de forma persistente. Isso significa que as informações ficam guardadas no banco de dados, em vez de existirem apenas enquanto o servidor está funcionando.

O Prisma ORM facilita a comunicação entre a aplicação e o banco de dados. A estrutura das entidades e dos relacionamentos é definida no arquivo `prisma/schema.prisma`.

As migrações permitem registrar e aplicar mudanças na estrutura do banco. Durante o desenvolvimento, uma das mudanças realizadas foi a inclusão do campo `telefone` na entidade de estudantes.

O projeto também possui um seed, utilizado para inserir dados iniciais de exemplo e facilitar os testes.

## 9. Trabalho 3: arquitetura em camadas

No Trabalho 3, o código foi reorganizado em camadas para deixar cada parte responsável por uma função específica.

Essa separação facilita a leitura, a manutenção e a alteração do projeto.

### 9.1. Routes — rotas

As rotas definem os caminhos da API e os métodos HTTP disponíveis. Elas encaminham cada requisição para o controller responsável.

### 9.2. Controllers — controladores

Os controllers recebem as requisições, chamam os serviços necessários e devolvem as respostas HTTP.

A ideia é evitar que eles concentrem todas as regras e operações do sistema.

### 9.3. Services — serviços

Os services organizam as operações da aplicação e fazem a ligação entre os controllers e os repositórios.

Essa camada ajuda a separar o funcionamento da aplicação do código que acessa diretamente o banco de dados.

### 9.4. Repositories — repositórios

Os repositories são responsáveis pelo acesso aos dados usando o Prisma ORM.

Com essa organização, as consultas e operações no banco ficam separadas dos controllers e dos services.

### 9.5. Middlewares

Os middlewares executam tarefas durante o processamento das requisições.

Neste projeto, são utilizados para validar os dados recebidos e tratar erros.

### 9.6. Config e container

O arquivo `src/config/container.js` organiza a criação e a disponibilização das dependências utilizadas pelos controllers e serviços.

Isso evita que cada parte da aplicação precise criar todas as suas dependências separadamente.

### 9.7. Prisma

O Prisma continua responsável pela comunicação com o banco de dados. O acesso ao banco é realizado pelos repositórios, mantendo essa responsabilidade concentrada na camada de persistência.

## 10. Padrões de projeto utilizados

Padrões de projeto são formas conhecidas de organizar o código para resolver problemas comuns no desenvolvimento de software.

Neste trabalho, foram utilizados três padrões.

### 10.1. Repository

O padrão Repository separa o acesso ao banco de dados do restante da aplicação.

No projeto, os arquivos da pasta `src/repositories` concentram as operações realizadas com o Prisma.

Essa separação facilita a manutenção, pois as consultas ao banco ficam em um local específico.

### 10.2. Injeção de Dependência

A Injeção de Dependência permite que um componente receba as dependências de que precisa, em vez de criar tudo diretamente dentro dele.

No projeto, o arquivo `src/config/container.js` organiza as instâncias dos repositórios e serviços que são utilizadas pelos controllers.

Isso ajuda a diminuir o acoplamento entre as partes da aplicação e facilita futuras alterações.

### 10.3. Factory

O padrão Factory utiliza funções responsáveis pela criação de objetos ou instâncias.

Neste projeto, as funções de criação dos repositórios e serviços ajudam a organizar a construção dessas instâncias e suas dependências.

O uso desse padrão complementa a organização do container e da injeção de dependência.

## 11. Fluxo de uma requisição

O fluxo de uma requisição acontece da seguinte forma:

1. O cliente envia uma requisição para um endpoint da API.
2. A rota identifica o caminho e encaminha a requisição.
3. Os middlewares executam as validações necessárias, quando aplicáveis.
4. O controller recebe a requisição e chama o serviço responsável.
5. O serviço realiza a operação utilizando o repositório.
6. O repositório acessa o banco de dados por meio do Prisma.
7. O resultado retorna pelas camadas até o controller, que envia a resposta ao cliente.

Esse fluxo ajuda a entender como as partes do projeto trabalham juntas.

## 12. Documentação da arquitetura e ADRs

Além deste README, o projeto possui arquivos específicos para explicar as decisões tomadas durante a organização do código.

O arquivo `ARQUITETURA.md` apresenta:

- o diagrama da arquitetura;
- as responsabilidades das camadas;
- o fluxo de uma requisição;
- as justificativas para os padrões de projeto utilizados.

O projeto também possui dois ADRs (*Architecture Decision Records*), que são registros das decisões de arquitetura.

Os arquivos são:

- `docs/adr/0001-arquitetura-em-camadas.md`
- `docs/adr/0002-injecao-de-dependencia.md`

O primeiro registra a decisão de organizar a aplicação em camadas. O segundo registra a decisão de utilizar injeção de dependência.

## 13. Estrutura do projeto

A estrutura principal do projeto está organizada da seguinte forma:

```text
Trilha3/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.js
├── docs/
│   └── adr/
│       ├── 0001-arquitetura-em-camadas.md
│       └── 0002-injecao-de-dependencia.md
├── src/
│   ├── config/
│   │   └── container.js
│   ├── controllers/
│   ├── docs/
│   │   └── openapi.yaml
│   ├── middlewares/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── app.js
├── ARQUITETURA.md
├── README.md
├── eslint.config.js
├── package.json
└── package-lock.json
```

A pasta `prisma` contém a definição do banco de dados, as migrações e o seed.

A pasta `src` contém o código principal da API, separado de acordo com as responsabilidades de cada camada.

A pasta `docs/adr` guarda os registros das decisões de arquitetura.

O arquivo `ARQUITETURA.md` explica com mais detalhes como as camadas se relacionam.

## 14. Como configurar e executar o projeto

Para executar o projeto em outro computador, é necessário ter o Node.js e o PostgreSQL instalados.

### Passo 1 — Instalar as dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### Passo 2 — Configurar o banco de dados

Crie ou utilize um banco PostgreSQL e configure a variável `DATABASE_URL` no arquivo `.env`.

Exemplo de formato:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/biblioteca2"
```

Substitua os valores de exemplo pelas informações corretas do seu ambiente.

O arquivo `.env` contém configurações locais e não deve ser enviado ao GitHub. O arquivo `.env.example` pode ser utilizado como modelo, caso esteja disponível no projeto.

### Passo 3 — Aplicar as migrações

Se o banco estiver sendo configurado pela primeira vez, execute:

```bash
npx prisma migrate dev
```

Esse comando aplica as migrações pendentes. Em um banco que já está configurado, não é necessário recriar a estrutura sem motivo.

### Passo 4 — Inserir os dados iniciais

Para executar o seed, utilize:

```bash
npx prisma db seed
```

Esse comando insere os dados iniciais definidos no projeto. Evite executá-lo novamente sem verificar como o seed está configurado, para não duplicar registros.

### Passo 5 — Iniciar a API

Execute:

```bash
npm run dev
```

A API utiliza a porta 3000 por padrão.

Endereço local:

`http://localhost:3000`

## 15. Verificação do código

O ESLint é utilizado para verificar problemas de escrita e organização do código JavaScript.

Para executar a verificação, utilize:

```bash
npx eslint src
```

A verificação deve terminar sem apresentar erros de lint.

## 16. Documentação OpenAPI

O arquivo `src/docs/openapi.yaml` contém a documentação OpenAPI da API.

Nele estão descritos os endpoints, os parâmetros e as respostas documentadas para as operações disponíveis.

A documentação ajuda a entender como utilizar a API sem precisar analisar todo o código-fonte.

## 17. Testes realizados

Durante o desenvolvimento, os endpoints foram testados utilizando o Insomnia.

Foram verificadas operações como:

- consulta de livros, estudantes e empréstimos;
- cadastro de registros;
- atualização completa e parcial;
- exclusão de registros;
- busca e filtros de livros;
- paginação e ordenação;
- consulta de dados relacionados;
- busca de registros inexistentes;
- validação de relacionamentos e tratamento de erros.

Esses testes ajudaram a verificar o funcionamento da API e a identificar problemas durante o desenvolvimento.

## 18. Considerações finais

O projeto começou com a implementação de uma API REST para gerenciar uma biblioteca escolar. Ao longo do desenvolvimento, foram utilizados o PostgreSQL e o Prisma ORM para armazenar e consultar os dados.

No Trabalho 3, o foco foi organizar melhor o código, separando as responsabilidades em camadas e utilizando os padrões Repository, Injeção de Dependência e Factory.

Com essa organização, o projeto fica mais fácil de entender, manter e modificar. A separação das responsabilidades também ajuda a evitar que toda a lógica da aplicação fique concentrada em um único arquivo.

Este trabalho permitiu praticar a criação de APIs, o uso de banco de dados, a organização do código e a aplicação de conceitos de arquitetura de software.
