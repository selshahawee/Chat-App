

export type User = {
  fullName: string;
  email: string;
  password: string;
  id: string;
  image: string;
};

export type Token = string;

export type LoginResponse = {
  message: string;
  token: string;
};

export type Conversation = {
  id: number;
  users: User[];
  messages: Message[];
};

export type Message = {
  id: number;
  body: string;
  created_at: string;
  user: User;
};

export type AppStateType = {
  user: User | null;
  token: string;
  conversation: Conversation | [];
};
