import BreadCrumbs from "@/components/BreadCrumbs";
import PreviewItemsCard from "@/components/PreviewItemsCard";
import { BrandsType, ProductType } from "@/type/type";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  dataRes:BrandsType[]
}

const BrandPage: NextPage<Props> = ({dataRes}) => {
  return (
    <>
    <div className="row pt-3">
          <div className="col-12 d-flex">
          <BreadCrumbs /> <p className="m-0">Локални брендови</p>
          </div>
          </div>
      <div className="row py-3">
        <div className="col-12 d-flex align-items-center">
          <img src="/images/sparks.png" alt="" />
          <h4 className="m-0">Сите брендови</h4>
        </div>
      </div>
      <div className="row">
        {dataRes.map((brand) => {
          return (
            <div className="col-10 offset-1 pb-3" key={brand.id}>
              <Link href={`/brandPage/${brand.id}`} style={{textDecoration:`none`,color:`#000`}}>
                <div className="card" style={{boxShadow:`2px 2px 2px 1px rgba(0, 0, 0, 0.1)`}}>
                  <img className="card-img-top" src={brand.img} alt="" />
                  <div className="card-body">
                    <div className="text-center">
                      <h5>{brand.title}</h5>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BrandPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:5001/brands`)

  const dataRes: BrandsType[] = await res.json()
  return {
    props: {
      dataRes:dataRes
    },
  };
};
