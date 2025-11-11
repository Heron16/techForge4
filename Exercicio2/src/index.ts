import { ContaBancaria } from './ContaBancaria';
import { Livro } from './Livro';
import { Produto } from './Produto';
import { Temperatura } from './Temperatura';
import { Agenda } from './Agenda';

console.log('=== EXERCÍCIOS DE CLASSES EM TYPESCRIPT ===\n');

console.log('=== EXERCÍCIO 1: CONTA BANCÁRIA ===');
const conta1 = new ContaBancaria('João Silva', 1000);
conta1.exibirInformacoes();
conta1.depositar(500);
conta1.sacar(200);
conta1.exibirInformacoes();
console.log('');

console.log('=== EXERCÍCIO 2: LIVRO ===');
const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1200, false);
livro1.exibirInformacoes();
livro1.marcarComoLido();
livro1.exibirInformacoes();
console.log('');

console.log('=== EXERCÍCIO 3: PRODUTO ===');
const produto1 = new Produto('Notebook Dell', 3500, 10);
produto1.exibirInformacoes();
produto1.vender(3);
produto1.reporEstoque(5);
produto1.exibirInformacoes();
console.log('');

console.log('=== EXERCÍCIO 4: TEMPERATURA ===');
const temp1 = new Temperatura(25);
temp1.exibirConversoes();
temp1.setValor(100);
temp1.exibirConversoes();
console.log('');

console.log('=== EXERCÍCIO 5: AGENDA ===');
const agenda = new Agenda();
agenda.adicionarCompromisso('Reunião com cliente às 10h');
agenda.adicionarCompromisso('Almoço com equipe às 12h30');
agenda.adicionarCompromisso('Apresentação do projeto às 15h');
agenda.listarCompromissos();
agenda.buscarCompromisso('reunião');
agenda.buscarCompromisso('almoço');

console.log('\n=== TESTES COMPLETOS ===');
console.log('Todos os exercícios foram executados com sucesso!');