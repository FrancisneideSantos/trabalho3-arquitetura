# ADR 0002 — Uso de injeção de dependência

- **Status:** Aceita

## Contexto

Os serviços e repositórios da API precisam utilizar outros componentes para executar suas operações. Criar essas dependências diretamente em vários pontos do código pode aumentar o acoplamento.

## Decisão

Utilizar um container em `src/config/container.js` para organizar a criação e a disponibilização das dependências utilizadas pelos controllers e serviços.

## Consequências

A criação dos componentes fica centralizada e suas dependências ficam mais explícitas, facilitando a manutenção e futuras alterações. Como consequência, é necessário manter o container atualizado quando novos componentes ou dependências forem adicionados.