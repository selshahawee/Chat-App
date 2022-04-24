import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducer/store";
import { setUser, setToken } from "./reducer/app";
import { getUser } from "./api/index";
import ChatPlace from "./pages/ChatPlace";



function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.app.user);

  async function saveUser(token: string) {
    const user = await getUser(token);
    console.log({user})
    dispatch(setUser(user));
    
  }
  
  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem("auth-token");
    console.log(tokenLocalStorage)
    if (tokenLocalStorage) {
      dispatch(setToken(tokenLocalStorage));
      console.log({ tokenLocalStorage});
      saveUser(tokenLocalStorage);
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        

        <Route path="/chat" element={<ChatPlace />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
