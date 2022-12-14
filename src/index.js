import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Componete1 from "./Componete1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import Sobre from './sobre';
import Usuarios from "./Usuarios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="usuarios" element={<Componete1 />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="pessoas" element={<Usuarios/>}/>
    </Routes>
  </BrowserRouter>
);
