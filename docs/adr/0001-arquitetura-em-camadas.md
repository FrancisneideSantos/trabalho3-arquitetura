# ADR 0001 — Adoção de arquitetura em camadas

- **Status:** Aceita

## Contexto

O projeto da API da biblioteca precisava organizar melhor as responsabilidades do código, evitando que rotas, regras da aplicação e operações de banco de dados ficassem concentradas nos mesmos arquivos.

## Decisão

Adotar uma arquitetura em camadas, separando routes, controllers, services e repositories, além de middlewares e configurações.

## Consequências

O código fica mais organizado e cada camada possui uma responsabilidade definida. A manutenção e a identificação de erros ficam mais simples. Em contrapartida, a arquitetura passa a ter mais arquivos e exige organização na comunicação entre as camadas.