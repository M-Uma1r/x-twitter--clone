import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Foryou from "./Foryou";
import Following from "./Following";
import "./home.css";
import "./XTwitterPost.css";
import Rightbar from "./Rightbar";


export default function Home() {


  return (
    <div className="d-inline">
      <div className="left">
        <Sidebar />
      </div>
      <div className="mid">
        <div className="foryoubox">
        <Foryou />
          <Routes>
              <Route path="following" element={<Following/>}/>
          </Routes>
          
        </div>
        
      </div>
      <div className="right">
        <Rightbar/>
      </div>
    </div>
  );
}
