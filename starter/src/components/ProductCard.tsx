import React, { useContext, useEffect, useState } from "react";
import { Product } from "../assets/data/list";
import { ProductContext } from "../contexts/ProductsContext";

const ProductCard: React.FC<Product> = (product) => {
  const { selectedProducts } = useContext(ProductContext);

  return (
    <div
      key={product.id}
      className={`p-3 card col-3 m-1 ${product.selected ? "selected" : ""}`}
      onClick={() => {
        selectedProducts(product.id);
      }}
    >
      <img
        src={require(`../assets/images/${product.img}`)}
        className="w-100 d-block"
        alt=""
      />
      <p>{product.name}</p>
      <span>{product.price} den</span>
    </div>
  );
};

export default ProductCard;
