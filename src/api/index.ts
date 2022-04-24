import axios from "axios";
import { Message, User } from "../types";
import { Conversation } from "../types";

const URL = "http://localhost:8080/"

const api = axios.create(
    {
        baseURL: URL,
    }); 


export const signUpAPI = async (user:{email:string, password:string, fullName:string }) => {
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

export const getConvoAPI = async (token: string): Promise<Conversation[]> => {
  
  const response = await api.get("message/conversations/", {
    headers: {
      Authorization: token,
    },
  });
  
  return response.data.conversations
};


   // post a conversation 
// export const postConvoAPI = async (token: string, user_id: string, message: string): Promise<Conversation> => {
//     const response = await api.post("/message/conversations/" +user_id, {
//         message
//     }, {
//         headers: {
//             Authorization: token
//         },
//     });
//     return response.data;
// }

// send chat message in conversation
export const sendChatMessage = async (
  token: string,
//  payload: {}
body:string,
id:number
): Promise<Message> => {
  const response = await api.post(
    "/message/new/",
    {
      body,
      "conversationID":id,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return response.data;
};

 // get messages from conversations 

    export const getMessagesAPI = async (token: string, conversation_id: string): Promise<Conversation> => {
        const response = await api.get("/message/conversation/"+conversation_id, {
            
            
            headers: {
                Authorization: token,
            },
           
        });
       
        console.log({ response });
        return response.data;
         
    }
