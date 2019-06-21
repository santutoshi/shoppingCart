export interface IProduct {
    products: Product[];
    users: User[];
}
export interface User {
    id: number;
    username: string;
    password: string;
}

export interface Product {
    availableSizes: string[];
    currencyFormat: string;
    currencyId: string;
    description: string;
    id: number;
    installments: number;
    isFreeShipping: boolean;
    price: number;
    sku: number;
    style: string;
    title: string;
    imageUrl: string;
}

