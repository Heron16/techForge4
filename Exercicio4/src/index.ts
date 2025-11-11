// Arquivo principal para demonstrar todas as funcionalidades dos exercícios

import { ItemLoja } from './exercicio1';
import { Texto } from './exercicio2';
import { Loja, ProdutoLoja } from './exercicio3';
import { Biblioteca, Livro } from './exercicio4';
import { BibliotecaGestao, LivroBiblioteca } from './exercicio5';

// Função para demonstrar separadores visualmente
function exibirSecao(titulo: string): void {
    console.log('\n' + '='.repeat(60));
    console.log(` ${titulo} `);
    console.log('='.repeat(60));
}

function exibirSubsecao(titulo: string): void {
    console.log(`\n--- ${titulo} ---`);
}

// Demonstração do Exercício 1
exibirSecao('EXERCÍCIO 1 - PRODUTOS');
const produto1 = new ItemLoja(1, 'Notebook Dell', 3500.00);
const produto2 = new ItemLoja(2, 'Mouse Wireless', 89.90);

console.log('Produto 1:', produto1.exibirInfo());
console.log('Produto 2:', produto2.exibirInfo());

// Demonstração do Exercício 2
exibirSecao('EXERCÍCIO 2 - DOCUMENTOS');
const documento1 = new Texto('Artigo Técnico', 'Este artigo discute as melhores práticas de TypeScript...');
const documento2 = new Texto('Tutorial de JavaScript', 'JavaScript é uma linguagem de programação versátil...');

console.log('Documento 1:', documento1.exibir());
console.log('Documento 2:', documento2.exibir());
console.log('Resumo Documento 1:', documento1.getResumo(30));

// Demonstração do Exercício 3
exibirSecao('EXERCÍCIO 3 - CADASTRO E BUSCA DE PRODUTOS');
const loja = new Loja();

const produtosLoja: ProdutoLoja[] = [
    { codigo: 101, nome: 'Camiseta' },
    { codigo: 102, nome: 'Calça Jeans' },
    { codigo: 103, nome: 'Tênis' },
    { codigo: 104, nome: 'Boné' }
];

loja.adicionarProdutos(produtosLoja);

exibirSubsecao('Busca de Produtos por Código');
console.log('Busca produto código 102:', loja.buscarProdutoPorCodigo(102));
console.log('Busca produto código 105 (inexistente):', loja.buscarProdutoPorCodigo(105));

exibirSubsecao('Listagem de Todos os Produtos');
console.log('Total de produtos:', loja.getTotalProdutos());
loja.listarTodosProdutos().forEach(produto => {
    console.log(`- Código: ${produto.codigo}, Nome: ${produto.nome}`);
});

// Demonstração do Exercício 4
exibirSecao('EXERCÍCIO 4 - SISTEMA DE BIBLIOTECA');
const biblioteca = new Biblioteca();

const livros: Livro[] = [
    { titulo: 'Dom Casmurro', autor: 'Machado de Assis', disponivel: true },
    { titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', disponivel: false },
    { titulo: '1984', autor: 'George Orwell', disponivel: true },
    { titulo: 'A Metamorfose', autor: 'Franz Kafka', disponivel: true }
];

biblioteca.adicionarLivros(livros);

exibirSubsecao('Livros Disponíveis');
const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log(`Encontrados ${livrosDisponiveis.length} livros disponíveis:`);
livrosDisponiveis.forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
});

exibirSubsecao('Busca por Autor');
const livrosMachado = biblioteca.buscarLivrosPorAutor('Machado');
console.log('Livros de Machado de Assis:', livrosMachado);

exibirSubsecao('Empréstimo de Livro');
console.log('Tentando emprestar "Dom Casmurro":', biblioteca.emprestarLivro('Dom Casmurro'));
console.log('Livros disponíveis após empréstimo:', biblioteca.buscarLivrosDisponiveis().length);

// Demonstração do Exercício 5
exibirSecao('EXERCÍCIO 5 - GESTÃO DE BIBLIOTECAS AVANÇADA');
const bibliotecaGestao = new BibliotecaGestao();

const livrosBiblioteca: LivroBiblioteca[] = [
    { titulo: 'A Arte da Guerra', autor: 'Sun Tzu', genero: 'Estratégia', disponivel: true },
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: true },
    { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', genero: 'Fantasia', disponivel: false },
    { titulo: '1984', autor: 'George Orwell', genero: 'Distopia', disponivel: true },
    { titulo: 'A Revolução dos Bichos', autor: 'George Orwell', genero: 'Distopia', disponivel: true },
    { titulo: 'Orgulho e Preconceito', autor: 'Jane Austen', genero: 'Romance', disponivel: true }
];

bibliotecaGestao.adicionarLivros(livrosBiblioteca);

exibirSubsecao('Filtrar por Gênero');
const livrosFantasia = bibliotecaGestao.filtrarPorGenero('Fantasia');
console.log(`Livros de Fantasia (${livrosFantasia.length}):`);
livrosFantasia.forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor}`);
});

exibirSubsecao('Buscar por Autor');
const livrosOrwell = bibliotecaGestao.buscarPorAutor('Orwell');
console.log(`Livros de George Orwell (${livrosOrwell.length}):`);
livrosOrwell.forEach(livro => {
    console.log(`- ${livro.titulo} (${livro.genero})`);
});

exibirSubsecao('Livros Disponíveis Ordenados por Título');
const livrosDisponiveisOrdenados = bibliotecaGestao.obterLivrosDisponiveisOrdenados();
console.log(`Livros disponíveis ordenados (${livrosDisponiveisOrdenados.length}):`);
livrosDisponiveisOrdenados.forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor} [${livro.genero}]`);
});

exibirSubsecao('Estatísticas da Biblioteca');
const estatisticas = bibliotecaGestao.obterEstatisticas();
console.log('Estatísticas:', estatisticas);

exibirSubsecao('Gêneros Disponíveis');
const generos = bibliotecaGestao.obterGenerosDisponiveis();
console.log('Gêneros:', generos);

exibirSubsecao('Autores Disponíveis');
const autores = bibliotecaGestao.obterAutoresDisponiveis();
console.log('Autores:', autores);

// Demonstração de funcionalidades adicionais
exibirSecao('FUNCIONALIDADES ADICIONAIS');

exibirSubsecao('Métodos Find e Filter');
console.log('\nMétodo find() - Busca o PRIMEIRO elemento que satisfaz a condição:');
console.log('Exemplo: buscar produto com código 102:', loja.buscarProdutoPorCodigo(102));

console.log('\nMétodo filter() - Retorna TODOS os elementos que satisfazem a condição:');
console.log('Exemplo: buscar livros disponíveis de George Orwell:');
const livrosDisponiveisOrwell = bibliotecaGestao.buscarPorAutor('Orwell')
    .filter(livro => livro.disponivel);
console.log(livrosDisponiveisOrwell);

console.log('\n' + '='.repeat(60));
console.log('DEMONSTRAÇÃO COMPLETA DOS EXERCÍCIOS FINALIZADA!');
console.log('='.repeat(60));