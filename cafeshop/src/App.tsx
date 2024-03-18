import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FullMenu from "./components/FullMenu";
import DrinkContextConstructor from "./context/DrinkContext";

function App() {
  return (
    <>
      <DrinkContextConstructor>
        <BrowserRouter>
          <Header />
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/FullMenu" element={<FullMenu />} />
              <Route path="*" element={<p>Error 404 Page not Found</p>} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </DrinkContextConstructor>
    </>
  );
}

export default App;
