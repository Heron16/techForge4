// Exercício 1: Veículos com polimorfismo

class Veiculo {
    mover(): void {
        console.log("O veículo está se movendo");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("O carro está dirigindo");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta está pedalando");
    }
}

// Testando o polimorfismo
console.log("=== Exercício 1: Veículos ===");

// Instanciando objetos
const carro = new Carro();
const bicicleta = new Bicicleta();

// Chamando o método mover() de cada um
carro.mover();
bicicleta.mover();

// Demonstrando polimorfismo com array
const veiculos: Veiculo[] = [carro, bicicleta];
console.log("\nPolimorfismo com array de veículos:");
veiculos.forEach(veiculo => veiculo.mover());