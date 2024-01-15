import ShopCards from "@/components/ShopCards";
import { ProductType } from "@/type/type";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  data: ProductType[];
}

const SearchPage: NextPage<Props> = ({ data }) => {
  return (
    <div className="row pt-3">
      {data.length > 0 ? (
        data.map((product) => {
          return <ShopCards key={product.id} {...product} />;
        })
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <p>Не постои таков производ, Ве молиме пребарајте повторно..</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let data: ProductType[] | null = null;
  if (query.titleValue) {
    const res = await fetch(
      `http://localhost:5001/Igralishteskopje?q=${query.titleValue}`
    );
    data = await res.json();
  }
  return {
    props: {
      data: data,
    },
  };
};
