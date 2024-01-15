import React, { useState } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './containers/Home';
import Basket from './components/Basket';
import Header from './components/Header';
import productList, { Product } from './assets/data/list';
import ProductsContextConst from './contexts/ProductsContext';

export const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <ProductsContextConst>
      <Header/>
     
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/basket' element={<Basket/>} />
      <Route path='*' element={<div>Error 404 Page Not Found</div>} />
      </Routes>
      </ProductsContextConst>
      </BrowserRouter>
    </div>
  );
};
