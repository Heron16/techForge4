// Exercício 4: Sistema de Biblioteca com Checagem de Disponibilidade
// Interface Livro com propriedades titulo, autor e disponivel
export interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

// Classe Biblioteca com array de livros e método de busca por disponibilidade
export class Biblioteca {
    private livros: Livro[];

    constructor() {
        this.livros = [];
    }

    // Método para adicionar livro à biblioteca
    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    // Método para adicionar múltiplos livros
    adicionarLivros(livros: Livro[]): void {
        this.livros.push(...livros);
    }

    // Método buscarLivrosDisponiveis usando Array.filter()
    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }

    // Métodos adicionais úteis
    listarTodosLivros(): Livro[] {
        return [...this.livros]; // Retorna cópia do array
    }

    buscarLivroPorTitulo(titulo: string): Livro | undefined {
        return this.livros.find(livro => 
            livro.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
    }

    buscarLivrosPorAutor(autor: string): Livro[] {
        return this.livros.filter(livro => 
            livro.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }

    emprestarLivro(titulo: string): boolean {
        const livro = this.buscarLivroPorTitulo(titulo);
        if (livro && livro.disponivel) {
            livro.disponivel = false;
            return true;
        }
        return false;
    }

    devolverLivro(titulo: string): boolean {
        const livro = this.buscarLivroPorTitulo(titulo);
        if (livro && !livro.disponivel) {
            livro.disponivel = true;
            return true;
        }
        return false;
    }

    getTotalLivros(): number {
        return this.livros.length;
    }

    getQuantidadeLivrosDisponiveis(): number {
        return this.buscarLivrosDisponiveis().length;
    }
}