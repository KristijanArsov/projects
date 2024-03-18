import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { productData } = useContext(StoreContext);
  return (
    <div className="row py-3 animate__animated animate__fadeInLeft">
      <div className="container">
        <div className="row">
          {
            productData.length > 0 ? ( productData.map((prod) => {
              return <ProductCard key={prod.id} {...prod} />
            })) : (<div className="col-12">
              <h1>Item not found...</h1>
            </div>)
          }
         
        </div>
      </div>
    </div>
  );
};

export default ProductList;
