import { iStratregy } from "./interface";

export class Soma implements iStratregy{
    
    execute(num1: number, num2: number): number {
        return num1 + num2;
    }
}