import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignUpmodal from "./components/SignUpmodal";
import SignUpPasswordModal from "./components/SignUpPasswordModal";
import SignInmodal from "./components/SignInmodal";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="Signup" element={<SignUpmodal />}/>
        <Route path="password" element={<SignUpPasswordModal />}/>
        <Route path="signin" element={<SignInmodal />}/>
        <Route path="home" element={<Home />}/>
        
        
        
        
      </Routes>
    </div>
  );
}
