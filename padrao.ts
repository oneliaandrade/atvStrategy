import { iStratregy } from "./interface";
import { Soma } from "./soma";
import { Subtracao } from "./subtracao";
import { Multiplicacao } from "./multiplicacao";

export class Calculadora {
    private strategy: iStratregy;

    constructor(strategy: iStratregy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: iStratregy): void {
        this.strategy = strategy;
    }

    calcular(num1: number, num2: number): number {
        return this.strategy.execute(num1, num2);
    }
}

export function operacao(): iStratregy {
    console.log(`Escolha a operação:`);
    console.log(`1 - Soma`);
    console.log(`2 - Subtração`);
    console.log(`3 - Multiplicação`);

    const opcao = readlineSync.questionInt(`Digite o número da operação desejada: `);

    switch (opcao) {
        case 1:
            return new Soma();
        case 2:
            return new Subtracao();
        case 3:
            return new Multiplicacao();
        default:
            throw new Error(`Operação inválida`);
    }
}