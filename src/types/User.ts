import App from "../App";

export type User    = {
    
    fullName: string;
    email: string;
    password: string;
    id?: string;
   
}
 
export type Token = string;

export type LoginRespone = {
    message: string;
    token: string;
}

export type Conversation = {
    id: string;
    token: string;
    user_id: string;
    conversation: [];
    messages: [];
}

 export type AppStateType = {
    user: User | null;
     token: string;
    conversation: Conversation | [];
}