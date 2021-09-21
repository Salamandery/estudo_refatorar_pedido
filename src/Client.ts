export default class Client {
    nome: string;
    cpf: string;

    constructor (nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
    }

    getCPF(): string {
        return this.cpf;
    }

    getNome(): string {
        return this.nome;
    }
}