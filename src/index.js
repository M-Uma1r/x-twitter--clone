import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import SignUp from './components/SignUp';
import Home from './components/Home';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </div>
  
);


