const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const generos = [
  'Romance',
  'Ficção Científica',
  'Fantasia',
  'Conto',
  'Poesia',
  'Terror',
  'Suspense',
  'Literatura Brasileira',
  'Distopia',
  'Não-ficção'
]

const autores = [
  { nome: 'Machado de Assis', anoNascimento: 1839 },
  { nome: 'Clarice Lispector', anoNascimento: 1920 },
  { nome: 'Jorge Amado', anoNascimento: 1912 },
  { nome: 'Graciliano Ramos', anoNascimento: 1892 },
  { nome: 'José de Alencar', anoNascimento: 1829 },
  { nome: 'Cecília Meireles', anoNascimento: 1901 },
  { nome: 'Carlos Drummond de Andrade', anoNascimento: 1902 },
  { nome: 'George Orwell', anoNascimento: 1903 },
  { nome: 'J.K. Rowling', anoNascimento: 1965 },
  { nome: 'Agatha Christie', anoNascimento: 1890 }
]

const livros = [
  {
    titulo: 'Dom Casmurro',
    isbn: '9788508058859',
    ano: 1899,
    exemplares: 3,
    genero: 'Literatura Brasileira',
    autores: ['Machado de Assis']
  },
  {
    titulo: 'Memórias Póstumas de Brás Cubas',
    isbn: '9788508058866',
    ano: 1881,
    exemplares: 2,
    genero: 'Literatura Brasileira',
    autores: ['Machado de Assis']
  },
  {
    titulo: 'A Hora da Estrela',
    isbn: '9788532507739',
    ano: 1977,
    exemplares: 3,
    genero: 'Romance',
    autores: ['Clarice Lispector']
  },
  {
    titulo: 'Capitães da Areia',
    isbn: '9788535914856',
    ano: 1937,
    exemplares: 2,
    genero: 'Literatura Brasileira',
    autores: ['Jorge Amado']
  },
  {
    titulo: 'Vidas Secas',
    isbn: '9788526012647',
    ano: 1938,
    exemplares: 3,
    genero: 'Literatura Brasileira',
    autores: ['Graciliano Ramos']
  },
  {
    titulo: 'Iracema',
    isbn: '9788572327351',
    ano: 1865,
    exemplares: 2,
    genero: 'Romance',
    autores: ['José de Alencar']
  },
  {
    titulo: 'Antologia Poética',
    isbn: '9788503009073',
    ano: 1963,
    exemplares: 2,
    genero: 'Poesia',
    autores: ['Cecília Meireles']
  },
  {
    titulo: '1984',
    isbn: '9788535914849',
    ano: 1949,
    exemplares: 4,
    genero: 'Distopia',
    autores: ['George Orwell']
  },
  {
    titulo: 'Harry Potter e a Pedra Filosofal',
    isbn: '9788532511010',
    ano: 1997,
    exemplares: 4,
    genero: 'Fantasia',
    autores: ['J.K. Rowling']
  },
  {
    titulo: 'Belas Maldições',
    isbn: '9788565530276',
    ano: 1990,
    exemplares: 2,
    genero: 'Fantasia',
    autores: ['Agatha Christie', 'George Orwell']
  }
]

const estudantes = [
  {
    nome: 'Ana Beatriz Souza',
    matricula: '2026001',
    email: 'ana.souza@estudante.edu.br',
    ativo: true
  },
  {
    nome: 'Bruno Carvalho Lima',
    matricula: '2026002',
    email: 'bruno.lima@estudante.edu.br',
    ativo: true
  },
  {
    nome: 'Carla Meneses',
    matricula: '2026003',
    email: 'carla.meneses@estudante.edu.br',
    ativo: true
  },
  {
    nome: 'Diego Ferreira Santos',
    matricula: '2026004',
    email: 'diego.santos@estudante.edu.br',
    ativo: true
  },
  {
    nome: 'Elisa Ramos Oliveira',
    matricula: '2026005',
    email: 'elisa.oliveira@estudante.edu.br',
    ativo: true
  },
  {
    nome: 'Felipe Andrade Costa',
    matricula: '2026006',
    email: 'felipe.costa@estudante.edu.br',
    ativo: true
  },
  {
    nome: 'Gabriela Nunes',
    matricula: '2026007',
    email: 'gabriela.nunes@estudante.edu.br',
    ativo: true
  },
  {
    nome: 'Henrique Pires',
    matricula: '2026008',
    email: 'henrique.pires@estudante.edu.br',
    ativo: true
  },
  {
    nome: 'Isabela Cardoso',
    matricula: '2026009',
    email: 'isabela.cardoso@estudante.edu.br',
    ativo: true
  },
  {
    nome: 'João Vitor Almeida',
    matricula: '2026010',
    email: 'joao.almeida@estudante.edu.br',
    ativo: true
  }
]

const emprestimos = [
  {
    livro: 'Dom Casmurro',
    matricula: '2026001',
    diasRetirada: -20,
    diasPrevista: -6,
    diasDevolucao: -8,
    status: 'devolvido'
  },
  {
    livro: 'A Hora da Estrela',
    matricula: '2026002',
    diasRetirada: -18,
    diasPrevista: -4,
    diasDevolucao: -3,
    status: 'devolvido'
  },
  {
    livro: 'Capitães da Areia',
    matricula: '2026003',
    diasRetirada: -15,
    diasPrevista: -1,
    diasDevolucao: null,
    status: 'atrasado'
  },
  {
    livro: 'Vidas Secas',
    matricula: '2026004',
    diasRetirada: -12,
    diasPrevista: 2,
    diasDevolucao: null,
    status: 'ativo'
  },
  {
    livro: 'Iracema',
    matricula: '2026005',
    diasRetirada: -10,
    diasPrevista: 4,
    diasDevolucao: null,
    status: 'ativo'
  },
  {
    livro: 'Antologia Poética',
    matricula: '2026006',
    diasRetirada: -30,
    diasPrevista: -16,
    diasDevolucao: -15,
    status: 'devolvido'
  },
  {
    livro: '1984',
    matricula: '2026007',
    diasRetirada: -8,
    diasPrevista: 6,
    diasDevolucao: null,
    status: 'ativo'
  },
  {
    livro: 'Harry Potter e a Pedra Filosofal',
    matricula: '2026008',
    diasRetirada: -25,
    diasPrevista: -11,
    diasDevolucao: -10,
    status: 'devolvido'
  },
  {
    livro: 'Belas Maldições',
    matricula: '2026009',
    diasRetirada: -14,
    diasPrevista: 0,
    diasDevolucao: null,
    status: 'atrasado'
  },
  {
    livro: 'Memórias Póstumas de Brás Cubas',
    matricula: '2026010',
    diasRetirada: -5,
    diasPrevista: 9,
    diasDevolucao: null,
    status: 'ativo'
  }
]

function dataComDias(dias) {
  const data = new Date()
  data.setDate(data.getDate() + dias)
  return data
}

async function main() {

  await prisma.emprestimo.deleteMany()
  await prisma.livroAutor.deleteMany()
  await prisma.livro.deleteMany()
  await prisma.autor.deleteMany()
  await prisma.estudante.deleteMany()
  await prisma.genero.deleteMany()

  await prisma.genero.createMany({
    data: generos.map(nome => ({ nome }))
  })

  await prisma.autor.createMany({
    data: autores
  })

  await prisma.estudante.createMany({
    data: estudantes
  })

  const generosBanco = await prisma.genero.findMany()
  const autoresBanco = await prisma.autor.findMany()
  const estudantesBanco = await prisma.estudante.findMany()

  const generoId = new Map(
    generosBanco.map(genero => [genero.nome, genero.id])
  )

  const autorId = new Map(
    autoresBanco.map(autor => [autor.nome, autor.id])
  )

  const estudanteId = new Map(
    estudantesBanco.map(estudante => [
      estudante.matricula,
      estudante.id
    ])
  )

  for (const livro of livros) {

    await prisma.livro.create({
      data: {
        titulo: livro.titulo,
        isbn: livro.isbn,
        ano: livro.ano,
        exemplares: livro.exemplares,
        generoId: generoId.get(livro.genero),

        autores: {
          create: livro.autores.map(nome => ({
            autorId: autorId.get(nome)
          }))
        }
      }
    })
  }

  const livrosBanco = await prisma.livro.findMany()

  const livroId = new Map(
    livrosBanco.map(livro => [livro.titulo, livro.id])
  )

  await prisma.emprestimo.createMany({
    data: emprestimos.map(emprestimo => ({
      livroId: livroId.get(emprestimo.livro),
      estudanteId: estudanteId.get(emprestimo.matricula),
      dataRetirada: dataComDias(emprestimo.diasRetirada),
      dataPrevista: dataComDias(emprestimo.diasPrevista),
      dataDevolucao:
        emprestimo.diasDevolucao === null
          ? null
          : dataComDias(emprestimo.diasDevolucao),
      status: emprestimo.status
    }))
  })

  console.log('Seed concluído com sucesso!')
  console.log(`${generos.length} gêneros cadastrados.`)
  console.log(`${autores.length} autores cadastrados.`)
  console.log(`${livros.length} livros cadastrados.`)
  console.log(`${estudantes.length} estudantes cadastrados.`)
  console.log(`${emprestimos.length} empréstimos cadastrados.`)
}

main()
  .catch(erro => {
    console.error('Erro ao executar o seed:', erro)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })