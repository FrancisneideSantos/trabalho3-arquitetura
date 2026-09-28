# API da Biblioteca Escolar

Projeto desenvolvido para a disciplina de Desenvolvimento de Software 2, com o objetivo de implementar uma API REST para o gerenciamento de uma biblioteca escolar.

## Descrição

A API permite o gerenciamento de livros, autores, gêneros, estudantes e empréstimos de uma biblioteca escolar.

O projeto utiliza Node.js e Express para a construção da API REST, Prisma ORM para acesso ao banco de dados e PostgreSQL para armazenamento persistente das informações.

A API possui operações de criação, consulta, atualização e exclusão dos principais recursos, além de relacionamentos entre as entidades, filtros, paginação, ordenação e tratamento de erros.

## Tecnologias utilizadas

* Node.js
* Express
* PostgreSQL
* Prisma ORM
* OpenAPI 3.0.3
* Swagger UI
* YAML
* Dotenv
* Nodemon

## Recursos da API

A API possui os seguintes recursos principais:

### Livros

Representa os livros disponíveis na biblioteca.

Principais campos:

* id
* titulo
* isbn
* ano
* exemplares
* generoId
* criadoEm
* atualizadoEm

### Autores

Representa os autores dos livros.

Principais campos:

* id
* nome
* anoNascimento

### Gêneros

Representa os gêneros literários dos livros.

Principais campos:

* id
* nome

### Estudantes

Representa os estudantes cadastrados na biblioteca.

Principais campos:

* id
* nome
* matricula
* email
* telefone
* ativo

### Empréstimos

Representa os empréstimos realizados pelos estudantes.

Principais campos:

* id
* livroId
* estudanteId
* dataRetirada
* dataPrevista
* dataDevolucao
* status

## Relacionamentos

O banco de dados possui relacionamentos entre as entidades:

* Um gênero pode possuir vários livros.
* Um livro pertence a um gênero.
* Um livro pode possuir vários autores.
* Um autor pode estar relacionado a vários livros.
* O relacionamento entre livros e autores é realizado pela tabela `LivroAutor`.
* Um estudante pode possuir vários empréstimos.
* Um livro pode possuir vários empréstimos.

## Endpoints

### Livros

| Método | Endpoint      | Descrição                      |
| ------ | ------------- | ------------------------------ |
| GET    | `/livros`     | Lista os livros                |
| GET    | `/livros/:id` | Busca um livro pelo ID         |
| POST   | `/livros`     | Cadastra um livro              |
| PUT    | `/livros/:id` | Atualiza um livro              |
| PATCH  | `/livros/:id` | Atualiza parcialmente um livro |
| DELETE | `/livros/:id` | Exclui um livro                |

### Estudantes

| Método | Endpoint          | Descrição                          |
| ------ | ----------------- | ---------------------------------- |
| GET    | `/estudantes`     | Lista os estudantes                |
| GET    | `/estudantes/:id` | Busca um estudante pelo ID         |
| POST   | `/estudantes`     | Cadastra um estudante              |
| PUT    | `/estudantes/:id` | Atualiza um estudante              |
| PATCH  | `/estudantes/:id` | Atualiza parcialmente um estudante |
| DELETE | `/estudantes/:id` | Exclui um estudante                |

### Empréstimos

| Método | Endpoint           | Descrição                           |
| ------ | ------------------ | ----------------------------------- |
| GET    | `/emprestimos`     | Lista os empréstimos                |
| GET    | `/emprestimos/:id` | Busca um empréstimo pelo ID         |
| POST   | `/emprestimos`     | Cadastra um empréstimo              |
| PUT    | `/emprestimos/:id` | Atualiza um empréstimo              |
| PATCH  | `/emprestimos/:id` | Atualiza parcialmente um empréstimo |
| DELETE | `/emprestimos/:id` | Exclui um empréstimo                |

### Recurso relacionado

| Método | Endpoint                      | Descrição                            |
| ------ | ----------------------------- | ------------------------------------ |
| GET    | `/estudantes/:id/emprestimos` | Lista os empréstimos de um estudante |

## Busca, filtros, paginação e ordenação

O endpoint de livros possui recursos adicionais para facilitar as consultas.

### Busca por título

É possível buscar livros pelo título:

`GET /livros?titulo=Dom`

### Filtro por gênero

É possível filtrar os livros pelo gênero:

`GET /livros?genero=Romance`

### Paginação

A consulta de livros permite utilizar os parâmetros `pagina` e `limite`:

`GET /livros?pagina=1&limite=2`

A resposta possui informações de paginação, como total de registros e quantidade de páginas.

### Ordenação

É possível ordenar os resultados utilizando os parâmetros `ordenar` e `direcao`.

Exemplo:

`GET /livros?ordenar=titulo&direcao=desc`

Os parâmetros de busca, filtro, paginação e ordenação podem ser combinados.

## Dados relacionados

As consultas de livros também podem retornar informações relacionadas, como o gênero e os autores associados ao livro.

Isso demonstra o uso dos relacionamentos definidos no banco de dados através do Prisma ORM.

## Validação de dados

A API realiza validações dos dados enviados nas requisições.

Entre as validações realizadas estão:

* campos obrigatórios;
* existência de registros relacionados;
* chaves estrangeiras;
* dados duplicados;
* recursos não encontrados.

Quando uma requisição possui dados inválidos, a API retorna uma resposta HTTP adequada.

## Tratamento de erros

A API possui tratamento de erros para situações como:

* recurso não encontrado;
* dados inválidos;
* conflito de integridade referencial;
* erro interno do servidor.

### Recurso não encontrado

Status:

`404 Not Found`

### Conflito de integridade

Quando um registro não pode ser excluído porque está sendo utilizado por outro registro relacionado, a API retorna:

`409 Conflict`

### Erro interno

Status:

`500 Internal Server Error`

## Códigos HTTP utilizados

| Código | Significado                    |
| ------ | ------------------------------ |
| 200    | Operação realizada com sucesso |
| 201    | Recurso criado com sucesso     |
| 204    | Recurso excluído com sucesso   |
| 400    | Dados inválidos                |
| 404    | Recurso não encontrado         |
| 409    | Conflito                       |
| 500    | Erro interno do servidor       |

## Banco de dados

O projeto utiliza PostgreSQL como banco de dados e Prisma ORM para realizar o acesso aos dados.

O banco possui seis entidades principais:

* `Genero`
* `Autor`
* `Livro`
* `LivroAutor`
* `Estudante`
* `Emprestimo`

As informações são armazenadas de forma persistente no banco de dados.

## Prisma e migrações

O Prisma é utilizado para definir o modelo do banco de dados e realizar as migrações.

A primeira migração foi utilizada para criar a estrutura inicial do banco.

Também foi realizada uma segunda migração para evoluir a estrutura do banco, adicionando o campo `telefone` à tabela de estudantes.

## Seed

O projeto possui um arquivo de seed para inserir dados iniciais no banco de dados.

O seed permite criar dados de exemplo para livros, autores, gêneros, estudantes e empréstimos, facilitando os testes da API.

## Configuração do ambiente

É necessário ter instalado:

* Node.js
* PostgreSQL

As informações de conexão com o banco de dados são armazenadas através da variável de ambiente `DATABASE_URL`.

O arquivo `.env` não deve ser enviado ao repositório.

O projeto possui um arquivo `.env.example` como modelo de configuração.

Exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/biblioteca2"
```

## Como instalar o projeto

Após clonar ou baixar o projeto, entre na pasta:

```bash
cd trabalho2
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com a conexão do PostgreSQL.

Depois, execute as migrações do Prisma:

```bash
npx prisma migrate dev
```

Para executar o seed, utilize:

```bash
npx prisma db seed
```

## Como executar

Para iniciar a API em modo de desenvolvimento:

```bash
npm run dev
```

A API estará disponível em:

`http://localhost:3000`

## Documentação OpenAPI

A API possui documentação utilizando OpenAPI.

O arquivo de documentação está disponível no projeto e descreve os endpoints, parâmetros, requisições e respostas da API.

## Testes

Os endpoints da API foram testados utilizando o Insomnia.

Foram realizados testes envolvendo:

* consultas;
* criação de registros;
* atualização de registros;
* exclusão de registros;
* paginação;
* filtros;
* ordenação;
* relacionamentos;
* validação de chaves estrangeiras;
* recursos não encontrados;
* conflitos de integridade referencial.

## Estrutura do projeto

A estrutura principal do projeto está organizada em pastas de acordo com as responsabilidades da aplicação, incluindo:

* `src`: código principal da aplicação;
* `routes`: definição das rotas;
* `controllers`: controle das requisições;
* `repositories`: acesso aos dados através do Prisma;
* `middlewares`: tratamento de erros e validações;
* `prisma`: schema, migrações e seed;
* `docs`: documentação da API.

## Considerações finais

O projeto implementa uma API REST para o gerenciamento de uma biblioteca escolar, utilizando PostgreSQL e Prisma ORM.

A aplicação contempla operações CRUD, relacionamentos entre entidades, persistência dos dados, migrações, seed, filtros, paginação, ordenação, validação de chaves estrangeiras e tratamento de erros HTTP.
