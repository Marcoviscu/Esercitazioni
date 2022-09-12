import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './pages/Gallery/Gallery.jsx';
import Navbar from "./components/Navbar";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="gallery" element={<Gallery />}/>
        <Route path='*' element='pagina non trovata'/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
