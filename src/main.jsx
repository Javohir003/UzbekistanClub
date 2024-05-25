
import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './home.css'
import  Home from  './Home/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home/>
  </React.StrictMode>,
)
