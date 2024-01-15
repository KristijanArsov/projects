import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./containers/Homepage/Homepage";
import CardContextConstructor from "./context/cardContext";
import Favorites from "./containers/FavoritesPage/Favorites";
import RestaurantDetail from "./components/RestaurantDetail/RestaurantDetail";
import CuisineDetail from "./containers/Homepage/components/Cuisines/CuisineDetail/CuisineDetail";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <CardContextConstructor>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/restaurantDetails/:id" element={<RestaurantDetail/>}/>
            <Route path="/cuisineType/:type" element={<CuisineDetail/>}/>
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="*" element={<div>Error 404 Page Not Found</div>} />
          </Routes>
        </CardContextConstructor>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
