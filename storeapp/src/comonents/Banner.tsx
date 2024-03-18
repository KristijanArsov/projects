import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="row">
      <div className="col-12 banner-bg-img position-relative">
        <div className="custom-absolute-banner position-absolute animate__animated animate__fadeInLeft">
          <p
            className=" w-75 fw-bold"
            style={{ fontSize: `50px` }}
          >
            Good Style is Limitless
          </p>
          <Link
          to={`/ShopPage`}
            className="btn custom-btn w-25"
            style={{ border: `1px solid #35374B` ,borderRadius:`10px`,fontSize:`12px`,color:`#35374B`}}
          >
            To Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
