import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./comonents/Header";
import HomePage from "./containers/HomePage";
import Footer from "./comonents/Footer";
import Search from "./comonents/Search";
import ShopPage from "./containers/ShopPage";
import StoreContextConstructor from "./context/StoreContext";
import DetailsPage from "./comonents/DetailsPage";
import BlogPage from "./containers/BlogPage";
import ContactPage from "./containers/ContactPage";
import SearchPage from "./containers/SearchPage";

function App() {
  const [selected, isSelected] = useState<boolean>(false);

  return (
    <div>
      <StoreContextConstructor>
        <BrowserRouter>
          <Search selected={selected} searchHandle={isSelected} />
          <Header searchHandle={isSelected} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ShopPage" element={<ShopPage />} />
            <Route path="/ShopPage/:id" element={<DetailsPage />} />
            <Route path="/BlogPage" element={<BlogPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/SearchPage" element={<SearchPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StoreContextConstructor>
    </div>
  );
}

export default App;
