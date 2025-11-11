export class Livro {
    private titulo: string;
    private autor: string;
    private paginas: number;
    private lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcarComoLido(): void {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }

    marcarComoNaoLido(): void {
        this.lido = false;
        console.log(`O livro "${this.titulo}" foi marcado como não lido.`);
    }

    getTitulo(): string {
        return this.titulo;
    }

    getAutor(): string {
        return this.autor;
    }

    getPaginas(): number {
        return this.paginas;
    }

    isLido(): boolean {
        return this.lido;
    }

    exibirInformacoes(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
        console.log(`Status: ${this.lido ? 'Lido' : 'Não lido'}`);
    }
}