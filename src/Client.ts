export default class Client {
    name: string;
    cpf: string;

    constructor (name: string, cpf: string) {
        this.name = name;
        this.cpf = cpf;
    }

    getCPF(): string {
        return this.cpf;
    }

    getNome(): string {
        return this.name;
    }
}