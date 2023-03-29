import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "@/styles/Global";
import { Home } from "@/pages/home";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle>
        <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>
);
