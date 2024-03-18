import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const GenderLinksHomePage = () => {
const {handleFilterByCategory} = useContext(StoreContext)
  return (
    <div className="row">
      <div className="col-lg-6 p-0 ">
        <div className="gender-link-female gender-link-similarities">
          <Link to={`/ShopPage`} onClick={()=> {
            handleFilterByCategory(`Jewelery`)
          }}>Female</Link>
        </div>
      </div>

      <div className="col-lg-6 p-0">
        <div className="gender-link-male gender-link-similarities">
          <Link to={`/ShopPage`} onClick={()=> {
            handleFilterByCategory(`Electronics`)
          }}>Male</Link>
        </div>
      </div>
    </div>
  );
};

export default GenderLinksHomePage;
