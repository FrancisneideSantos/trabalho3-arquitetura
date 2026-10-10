# Arquitetura do Projeto — API da Biblioteca

## 1. Objetivo

O projeto consiste em uma API REST para gerenciamento de uma biblioteca, com operações para livros, estudantes e empréstimos. A arquitetura foi organizada em camadas para separar as responsabilidades e facilitar a manutenção e a evolução do código.

## 2. Organização das camadas

- **Routes:** definem os endpoints da API e encaminham as requisições para os controllers.
- **Controllers:** recebem as requisições HTTP, acionam os serviços e retornam as respostas ao cliente.
- **Services:** concentram a coordenação das operações e as regras da aplicação.
- **Repositories:** realizam as operações de persistência e concentram o acesso ao banco de dados por meio do Prisma ORM.
- **Middlewares:** executam validações e tratam erros durante o processamento das requisições.
- **Config:** contém o container responsável por organizar a criação e a injeção das dependências.
- **Prisma:** define os modelos de dados, os relacionamentos e as migrações do banco de dados.

## 3. Diagrama da arquitetura

```text
Cliente HTTP
     |
     v
   Routes
     |
     v
 Controllers
     |
     v
   Services
     |
     v
 Repositories
     |
     v
 Prisma ORM
     |
     v
 Banco PostgreSQL

Middlewares: validação e tratamento de erros
Config: container e injeção de dependências
```

## 4. Fluxo de uma requisição

1. O cliente envia uma requisição HTTP para um endpoint.
2. A rota correspondente identifica o controller responsável.
3. O middleware de validação verifica os dados quando necessário.
4. O controller encaminha a operação para o service.
5. O service coordena a operação e utiliza o repository necessário.
6. O repository acessa o banco de dados por meio do Prisma.
7. O resultado retorna ao controller, que envia a resposta HTTP ao cliente.
8. Caso ocorra um erro, o middleware de tratamento de erros auxilia na resposta adequada.

## 5. Padrões de projeto

### Repository

O padrão Repository separa as operações de persistência do restante da aplicação. No projeto, os arquivos de repositório concentram as consultas e alterações realizadas por meio do Prisma.

### Injeção de Dependência

A injeção de dependência permite que os componentes recebam as dependências necessárias sem precisar criá-las diretamente em cada operação. No projeto, o container em `src/config/container.js` organiza a criação e a disponibilização dos repositórios e serviços.

### Factory

O padrão Factory é utilizado nas funções responsáveis por criar instâncias de componentes, como serviços e repositórios. Isso permite centralizar a criação desses objetos e facilitar a organização das dependências.

## 6. Benefícios da arquitetura

A separação das responsabilidades torna o código mais organizado, facilita a identificação de erros e reduz o acoplamento entre as partes do sistema. Dessa forma, alterações na persistência podem ser concentradas nos repositórios, enquanto controllers e services mantêm suas responsabilidades específicas.

## 7. Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JavaScript
- ESLint