export interface IAdmin {
    username: string;
    password: string;
    name:     string;
    surname:  string;
    email:    string;
    roles:    Role[];
}

export interface Role {
    rid: string;
}