export interface Category2 {
    status: boolean;
    result: CaResult;
}

export interface Category {
    status: boolean;
    result: CaResult[];
}

export interface CaResult {
    cid:      string;
    category: string;
}