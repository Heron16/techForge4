export class Temperatura {
    private valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    converterParaFahrenheit(): number {
        const fahrenheit = (this.valor * 9/5) + 32;
        console.log(`${this.valor}°C = ${fahrenheit.toFixed(2)}°F`);
        return fahrenheit;
    }

    converterParaKelvin(): number {
        const kelvin = this.valor + 273.15;
        console.log(`${this.valor}°C = ${kelvin.toFixed(2)}K`);
        return kelvin;
    }

    converterParaCelsius(fahrenheit: number): number {
        const celsius = (fahrenheit - 32) * 5/9;
        console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
        return celsius;
    }

    converterKelvinParaCelsius(kelvin: number): number {
        const celsius = kelvin - 273.15;
        console.log(`${kelvin}K = ${celsius.toFixed(2)}°C`);
        return celsius;
    }

    getValor(): number {
        return this.valor;
    }

    setValor(novoValor: number): void {
        this.valor = novoValor;
        console.log(`Temperatura atualizada para ${this.valor}°C`);
    }

    exibirConversoes(): void {
        console.log(`Temperatura atual: ${this.valor}°C`);
        this.converterParaFahrenheit();
        this.converterParaKelvin();
    }
}