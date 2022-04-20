import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducer/store";
import { setUser, setToken } from "./reducer/app";
import { meAPI } from "./api/index";
import io from "socket.io-client";
import ChatPlace from "./pages/ChatPlace";

const socket = io("http://localhost:3001");

function App() {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.app.user);

  async function saveUser(token: string) {
    const user = await meAPI(token);

    dispatch(setUser(user));
    console.log({ user });
  }
  
  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem("auth-token");
    console.log({ tokenLocalStorage });
    if (tokenLocalStorage) {
      dispatch(setToken(tokenLocalStorage));
      saveUser(tokenLocalStorage);
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/messenger" element={<Messenger/>} /> */}

        <Route path="/chat" element={<ChatPlace />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
