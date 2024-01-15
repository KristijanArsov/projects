import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../contexts/ProductsContext";

const ProductList = () => {
    const {products} =  useContext(ProductContext)
  return (
    <div className="container">
      <div className="row text-center d-flex justify-content-center align-items-center">
        {products.map((product) => {
          return <ProductCard {...product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
