export class Agenda {
    private compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        if (compromisso.trim() === '') {
            throw new Error("O compromisso não pode estar vazio");
        }
        this.compromissos.push(compromisso);
        console.log(`Compromisso adicionado: "${compromisso}"`);
    }

    listarCompromissos(): void {
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso agendado.");
            return;
        }

        console.log("=== Lista de Compromissos ===");
        this.compromissos.forEach((compromisso, index) => {
            console.log(`${index + 1}. ${compromisso}`);
        });
        console.log("============================");
    }

    removerCompromisso(indice: number): void {
        if (indice < 1 || indice > this.compromissos.length) {
            throw new Error("Índice de compromisso inválido");
        }
        const compromissoRemovido = this.compromissos.splice(indice - 1, 1)[0];
        console.log(`Compromisso removido: "${compromissoRemovido}"`);
    }

    limparAgenda(): void {
        this.compromissos = [];
        console.log("Todos os compromissos foram removidos.");
    }

    getQuantidadeCompromissos(): number {
        return this.compromissos.length;
    }

    buscarCompromisso(termo: string): string[] {
        const termoLower = termo.toLowerCase();
        const encontrados = this.compromissos.filter(compromisso => 
            compromisso.toLowerCase().includes(termoLower)
        );
        
        if (encontrados.length === 0) {
            console.log(`Nenhum compromisso encontrado com o termo "${termo}"`);
        } else {
            console.log(`Compromissos encontrados com o termo "${termo}":`);
            encontrados.forEach(compromisso => console.log(`- ${compromisso}`));
        }
        
        return encontrados;
    }
}