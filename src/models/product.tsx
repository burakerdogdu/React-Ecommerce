export interface Products {
    status: boolean;
    result: Result[];
}
export interface Product {
    status: boolean;
    result: Result;
}
export interface Result {
    pid:        number;
    title:      string;
    detail:     string;
    price:      number;
    stock:      number;
    brand:      string;
    categories: Category[];
    images:     Image[];
}

export interface Category {
    cid:      number;
    category: string;
}

export interface Image {
    iid:  number;
    path: string;
}
