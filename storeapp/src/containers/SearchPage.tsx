import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductList from "../comonents/ProductList";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const { productData } = useContext(StoreContext);
  return (
    <div className="container-fluid">
      {productData.length > 0 ? (
        <>
          <ProductList />
         
            <Link className="ms-3" to={`/`}>Go Back</Link>
        </>
      ) : (
        <div className="row">
          <div className="col-12">
            <h1>
              Items Not Found...<Link to={`/`}>Go Back</Link>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
