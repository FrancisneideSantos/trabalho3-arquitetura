const livros = [
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ano: 1899
  },
  {
    id: 2,
    titulo: 'Auto da Compadecida',
    autor: 'Ariano Suassuna',
    ano: 1955
  }
]

const estudantes = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao@email.com'
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria@email.com'
  }
]

const emprestimos = [
  {
    id: 1,
    livroId: 1,
    estudanteId: 1,
    dataEmprestimo: '2026-09-06'
  }
]

module.exports = {
  livros,
  estudantes,
  emprestimos
}