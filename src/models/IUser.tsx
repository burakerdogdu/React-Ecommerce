export interface IUser {
    uid:      number;
    name:     string;
    surname:  string;
    email:    string;
    password: string;
    age:      number;
    adress:   string;
    roles:    Role[];
    
}


export interface Role {
    rid:  number;
    name: string;
}