export interface IUser {
    users: User[];
}


export interface User {
    username: string;
    password: string;
    id: number;
}