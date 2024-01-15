import BreadCrumbs from "@/components/BreadCrumbs";
import PreviewItemsCard from "@/components/PreviewItemsCard";
import { BrandsType, ProductType } from "@/type/type";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
    data:BrandsType,
    miniShopData: ProductType[]
}

const BrandDetailsPage: NextPage<Props> = ({ data,miniShopData }) => {
  return (
    <>
    <div className="row pt-3">
          <div className="col-12 d-flex">
          <BreadCrumbs /> <p className="m-0 mr-1">Локални брендови</p> &#62; <p className="ml-1 m-0">{data.title}</p>
          </div>
          </div>
    <div className="row pb-3">
      <div className="col-12 d-flex align-items-center">
        <img src="/images/sparks.png" alt="" />
        <h4 className="m-0">{data.title}</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-10 offset-1">
        <img src={`/${data.img}`} alt="" className="d-block w-100" />
        <p className="pt-3">
          Концептот на @{data.title}_se базира на неколку прашања:
        </p>

        <ul className="p-0">
          <li>
            Дали постои простор за етикетирања и табу во овој безобразно
            неетички свет?
          </li>
          <li>Зошто фолирањето култура е поприфатено од искрениот отпор?</li>
          <li>
            Дали треба да се срамиме од сопственото само за друг да биде
            мирен?
          </li>
          <li>Дали ќе ни текне?</li>
        </ul>
        <p className="pb-1">
          Зачувај го слободниот дух и биди тоа што си с е к о г а ш .
        </p>
        <p>
          Погледнете ги производите на Зш да не кои ги нудиме во Игралиште.
          Имаме доста голем избор на Pussy привезоци кои се кул и ултра
          феминистички, а.к.а. grl pwr.
        </p>
      </div>
    </div>
    <div className="row py-4">
      <div className="col-12">
        <h3>Парчиња од брендот:</h3>
      </div>
    </div>
    <div className="row">
      <PreviewItemsCard data={miniShopData} />
    </div>
  </>
  );
};

export default BrandDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:5001/brands`);

  const dataRes: BrandsType[] = await res.json();

  const paths = dataRes.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let data: BrandsType | undefined = undefined;

  if (params?.id) {
    const res = await fetch(`http://localhost:5001/brands/${params.id}`);
    data = await res.json()
  }
  const miniShopRes = await fetch(
    `http://localhost:5001/Igralishteskopje?brand_like=${data?.title}`
  );

  const miniShopData: ProductType[] = await miniShopRes.json();

  return {
    props: {
        data:data,
        miniShopData:miniShopData
    },
  };
};
