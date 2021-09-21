export default class Product {
    description: string;
    price: number;

    constructor (description: string, price: number) {
        this.description = description;
        this.price = price;
    }

    getDescription() : string {
        return this.description;
    }

    getPrice(): number {
        return this.price;
    }
}