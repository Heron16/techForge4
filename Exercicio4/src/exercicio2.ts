// Exercício 2: Documentos
// Interface Documento com propriedades titulo e conteudo
export interface Documento {
    titulo: string;
    conteudo: string;
}

// Classe Texto que implementa a interface Documento
export class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }

    // Método exibir() que retorna título e conteúdo formatados
    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }

    // Métodos adicionais úteis
    getResumo(maxLength: number = 50): string {
        if (this.conteudo.length <= maxLength) {
            return this.conteudo;
        }
        return this.conteudo.substring(0, maxLength) + '...';
    }

    atualizarConteudo(novoConteudo: string): void {
        this.conteudo = novoConteudo;
    }
}