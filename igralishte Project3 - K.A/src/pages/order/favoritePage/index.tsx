import OrderCards from "@/components/OrderCards";
import { ProductType } from "@/type/type";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  dataRes: ProductType[];
}

const FavoritesPage: NextPage<Props> = ({ dataRes }) => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-10 offset-1 d-flex text-center py-3 justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">
            <img src="/images/cart.png" className="p-2"/>
            <Link
              href={`/order`}
              className="m-0"
              style={{
                fontSize: `20px`,
                textDecoration: `none`,
                color: `#000`,
              }}
            >
              Кошничка{" "}
            </Link>
          </div>

          <div className="d-flex align-items-center">
            <img
              src="/images/ph_heart-straight-thin.png"
              className="p-2"
            />
            <Link
              href={`/order/favoritePage`}
              className="m-0 text-danger"
              style={{
                fontSize: `20px`,
                textDecoration: `none`,
                color: `#000`,
              }}
            >
              Омилени
            </Link>
          </div>
        </div>
        <div
          className="col-10 offset-1"
          style={{ height: `0.7px`, width: `310px`, background: `#efc990` }}
        ></div>
      </div>
      <div className="row">
        {dataRes.map((product) => {
          if (product.isFavorite == true) {
            return <OrderCards key={product.id} {...product} />;
          }
        })}
      </div>
    </div>
  );
};

export default FavoritesPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:5001/Igralishteskopje`);
  const dataRes: ProductType[] = await res.json();
  return {
    props: {
      dataRes: dataRes,
    },
  };
};
