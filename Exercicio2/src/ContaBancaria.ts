export class ContaBancaria {
    private titular: string;
    private saldo: number;

    constructor(titular: string, saldoInicial: number = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do depósito deve ser positivo");
        }
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do saque deve ser positivo");
        }
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente para o saque");
        }
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    }

    getTitular(): string {
        return this.titular;
    }

    getSaldo(): number {
        return this.saldo;
    }

    exibirInformacoes(): void {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
    }
}