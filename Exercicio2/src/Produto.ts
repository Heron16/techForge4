export class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotalEmEstoque(): number {
        const total = this.preco * this.quantidade;
        console.log(`Valor total em estoque de ${this.nome}: R$ ${total.toFixed(2)}`);
        return total;
    }

    reporEstoque(quantidade: number): void {
        if (quantidade <= 0) {
            throw new Error("Quantidade para repor estoque deve ser positiva");
        }
        this.quantidade += quantidade;
        console.log(`Estoque de ${this.nome} reposto. Quantidade atual: ${this.quantidade}`);
    }

    vender(quantidade: number): void {
        if (quantidade <= 0) {
            throw new Error("Quantidade para venda deve ser positiva");
        }
        if (quantidade > this.quantidade) {
            throw new Error("Quantidade indisponível em estoque");
        }
        this.quantidade -= quantidade;
        console.log(`Venda de ${quantidade} unidades de ${this.nome}. Quantidade restante: ${this.quantidade}`);
    }

    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }

    getQuantidade(): number {
        return this.quantidade;
    }

    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Valor total em estoque: R$ ${this.calcularValorTotalEmEstoque().toFixed(2)}`);
    }
}