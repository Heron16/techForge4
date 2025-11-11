// Exercício 5: Gestão de Bibliotecas com Filtro Avançado
// Interface LivroBiblioteca com propriedades titulo, autor, genero e disponivel
export interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

// Classe BibliotecaGestao com métodos avançados de filtro
export class BibliotecaGestao {
    private livros: LivroBiblioteca[];

    constructor() {
        this.livros = [];
    }

    // Método para adicionar livro
    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    // Método para adicionar múltiplos livros
    adicionarLivros(livros: LivroBiblioteca[]): void {
        this.livros.push(...livros);
    }

    // Método filtrarPorGenero - retorna livros de um gênero específico
    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => 
            livro.genero.toLowerCase() === genero.toLowerCase()
        );
    }

    // Método buscarPorAutor - retorna livros de um autor específico
    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => 
            livro.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }

    // Método obterLivrosDisponiveisOrdenados - retorna livros disponíveis ordenados por título
    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }

    // Métodos adicionais úteis
    listarTodosLivros(): LivroBiblioteca[] {
        return [...this.livros];
    }

    buscarLivroPorTitulo(titulo: string): LivroBiblioteca | undefined {
        return this.livros.find(livro => 
            livro.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
    }

    obterGenerosDisponiveis(): string[] {
        const generos = [...new Set(this.livros.map(livro => livro.genero))];
        return generos.sort();
    }

    obterAutoresDisponiveis(): string[] {
        const autores = [...new Set(this.livros.map(livro => livro.autor))];
        return autores.sort();
    }

    obterEstatisticas(): {
        totalLivros: number;
        livrosDisponiveis: number;
        livrosEmprestados: number;
        generosDiferentes: number;
        autoresDiferentes: number;
    } {
        const total = this.livros.length;
        const disponiveis = this.livros.filter(l => l.disponivel).length;
        const emprestados = total - disponiveis;
        const generos = new Set(this.livros.map(l => l.genero)).size;
        const autores = new Set(this.livros.map(l => l.autor)).size;

        return {
            totalLivros: total,
            livrosDisponiveis: disponiveis,
            livrosEmprestados: emprestados,
            generosDiferentes: generos,
            autoresDiferentes: autores
        };
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
}