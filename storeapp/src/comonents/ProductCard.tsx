import React from "react";
import { ProductType } from "../type/type";
import { Link } from "react-router-dom";

const ProductCard: React.FC<ProductType> = ({ title, price, image,rating,id }) => {
  return (
    <div className="col-md-3 mb-3">
      <Link to={`/ShopPage/${id}`} style={{textDecoration:`none`,color:`black`}}>
      <div className="card card-custom p-3" style={{ height: `23rem` }}>
        <img src={image} className="w-50 ms-auto me-auto d-block" style={{ height: `200px`,objectFit:`contain` }} />
        <div className="card-body mt-3">
          <p className="small">{title}</p>
          <p className="small fw-bold m-0">Price: ${price}</p>
          <p className="small">{rating.rate} rating based on {rating.count} reviews</p>
        </div>
      </div>
      </Link>
      
    </div>
  );
};

export default ProductCard;
