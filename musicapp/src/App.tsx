import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Navbar from "./components/Navbar";
import MusicContextConstructor from "./context/MusicContext";
import ArtistDetails from "./components/ArtistDetails";
import AboutPage from "./containers/AboutPage";
import ContactPage from "./containers/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <MusicContextConstructor>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/details/:id" element={<ArtistDetails />} />
          </Routes>
          <Footer/>
        </MusicContextConstructor>
      </BrowserRouter>
    </>
  );
}

export default App;
