import App from "../App";

export type User    = {
    
    fullName: string;
    email: string;
    password: string;
}
 
export type Token = string;

export type LoginRespone = {
    message: string;
    token: string;
}

 export type AppStateType = {
    user: User | null;
    token: string;
}