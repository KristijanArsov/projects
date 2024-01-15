import { ProductType } from "@/type/type";
import Link from "next/link";
import React from "react";

const ShopCards: React.FC<ProductType> = ({ id, img, name, price }) => {
  return (
    <div
      className={`col-${
        +id % 5 == 0 ? `12` : `6`
      } mb-3 d-flex justify-content-center`}
    >
      <Link
        href={`/shop/${id}`}
        style={{ textDecoration: `none`, color: `#000` }}
      >
        <div className="card border-0" style={{ width: "160px" }}>
          <img
            className="w-100 d-block"
            src={`${img}`}
            style={{ height: `200px` }}
          />
          <div>
            <p style={{ fontSize: `13px` }} className="m-0">{name}</p>
            <span>{price} ден.</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShopCards;
