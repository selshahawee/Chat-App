import axios from "axios";
import { User } from "../types/User";
import { Conversation } from "../types/User";

const URL = "http://localhost:8080/"

const api = axios.create(
    {
        baseURL: URL,
    }); 


export const signUpAPI = async (user: User) => {
    const response = await api.post("/auth/signup", user);
    return response.data;

}

export const signInAPI = async (email:string, password:string) => {
    const response = await api.post("/auth/login", { email, password });
   
    return response.data;
    
} 

export const getUser = async (token: string): Promise<User> => {
    const response = await api.get("/auth/me", {
        headers: {
            Authorization: token
        },
    });
    return response.data.user;
}

export const getConvoAPI = async (token: string, user_id: string): Promise<Conversation> => {
    //@ts-ignore
    const response = await api.get("/message/conversations/" +user_id, {
        headers: {
            Authorization: token
        },
    });
 

    
    return response.data;
}



