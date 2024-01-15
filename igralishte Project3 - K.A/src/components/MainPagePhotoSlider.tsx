import { ProductType } from "@/type/type";
import Link from "next/link";
import React from "react";

interface Props {
  data: ProductType[];
}
const MainPagePhotoSlider: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="row pt-5 pb-3">
        <div className="col-12">
          <h4 className="text-center">Trendy парчиња во моментов</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div
            id="carouselExampleControls"
            className="carousel slide "
            data-ride="carousel"
            style={{ width: "100%", height: "480px" }}
          >
            <div className="carousel-inner">
              {data.map((product, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={product.id}
                >
                  <Link href={`/shop/${product.id}`}>
                    <img
                      className="d-block w-100"
                      src={product.img}
                      alt={`Slide ${index + 1}`}
                      style={{ height: `400px` }}
                    />
                  </Link>
                  <div>
                    <p>{product.name}</p>
                    <p>{product.price} ден.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-2 offset-5 pt-5">
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <img src={`/images/arrow-back-left.png`} aria-hidden="true" />
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <img src={`/images/arrow-back-right.png`} aria-hidden="true" />
        </a>
      </div>
      </div>
      
    </>
  );
};

export default MainPagePhotoSlider;
