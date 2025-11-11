// Exercício 1: Produtos
// Interface Produto com propriedades id, nome e preco
export interface Produto {
    id: number;
    nome: string;
    preco: number;
}

// Classe ItemLoja que implementa a interface Produto
export class ItemLoja implements Produto {
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    // Método adicional para exibir informações do produto
    exibirInfo(): string {
        return `ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
    }
}