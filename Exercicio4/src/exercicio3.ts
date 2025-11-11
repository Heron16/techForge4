// Exercício 3: Cadastro e Busca de Produtos em uma Loja
// Interface ProdutoLoja com propriedades codigo e nome
export interface ProdutoLoja {
    codigo: number;
    nome: string;
}

// Classe Loja com array de produtos e método de busca
export class Loja {
    private produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [];
    }

    // Método para adicionar produto à loja
    adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    // Método para adicionar múltiplos produtos
    adicionarProdutos(produtos: ProdutoLoja[]): void {
        this.produtos.push(...produtos);
    }

    // Método buscarProdutoPorCodigo usando Array.find()
    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }

    // Métodos adicionais úteis
    listarTodosProdutos(): ProdutoLoja[] {
        return [...this.produtos]; // Retorna cópia do array
    }

    removerProduto(codigo: number): boolean {
        const index = this.produtos.findIndex(produto => produto.codigo === codigo);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            return true;
        }
        return false;
    }

    getTotalProdutos(): number {
        return this.produtos.length;
    }
}