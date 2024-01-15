import { ProductType } from "@/type/type";
import Link from "next/link";
import React from "react";

interface Props {
  data: ProductType[];
}

const PreviewItemsCard: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((product) => {
        return (
          <div
            className="col-6 mb-3 d-flex justify-content-center"
            key={product.id}
          >
            <Link
              href={`/shop/${product.id}`}
              style={{ textDecoration: `none`, color: `black` }}
            >
              <div className="card border-0" style={{ width: "150px" }}>
                <img
                  className="card-img-top w-100"
                  src={`${product.img}`}
                  alt="Card image cap"
                  style={{ height: `186px` }}
                />
                <div className="card-body p-0">
                  <p className="card-title" style={{ fontSize: `13px` }}>
                    {product.name}
                  </p>
                  <span className="card-text">{product.price} ден.</span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PreviewItemsCard;
