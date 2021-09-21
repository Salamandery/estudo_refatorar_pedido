import Client from './Client';
import Product from './Product';

interface ProductOrder {
    product: Product[];
    quantity: number;
} 

export default class Order {
    products: ProductOrder[];
    client: Client;
    discount: number;

    constructor (products: ProductOrder[], client: Client, discount: number) {
        this.products = products;
        this.client = client;
        this.discount = discount;
    }

    getProducts(): ProductOrder[] {
        return this.products;
    }

    getClient(): Client {
        return this.client;
    }

    getDiscount(): number {
        return this.discount;
    }
}