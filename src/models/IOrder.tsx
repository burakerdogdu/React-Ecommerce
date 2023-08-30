export interface IOrder {
    status: boolean;
    result: Result[];
}

export interface Result {
    oid:         number;
    productname: string;
    pid:         number;
}

