import AboutCard from "@/components/AboutCard";
import BreadCrumbs from "@/components/BreadCrumbs";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AboutPage: NextPage = () => {
  const route = useRouter();
  const [isSelectedLeft, setIsSelectedLeft] = useState<boolean>(true);
  const contentData = [
    {
      isSelectedLeft: true,
      imageSrc: "/images/gift-card.png",
      title: "Кои сме ние?",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore, tenetur facere dolorum ipsum soluta hic ad voluptate quos. Itaque laboriosam possimus atque doloribus ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore, tenetur facere dolorum ipsum soluta hic ad voluptate quos. Itaque laboriosam possimus atque doloribus ducimus.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore, tenetur facere dolorum ipsum soluta hic ad voluptate quos. Itaque laboriosam possimus atque doloribus ducimus.",
      ],
    },
    {
      isSelectedLeft: false,
      imageSrc: "/images/gift-card2.png",
      title: "Наша работа",
      paragraphs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore, tenetur facere dolorum ipsum soluta hic ad voluptate quos. Itaque laboriosam possimus atque doloribus ducimus",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore, tenetur facere dolorum ipsum soluta hic ad voluptate quos. Itaque laboriosam possimus atque doloribus ducimus.",
      ],
    },
  ];

  return (
    <div className="container pt-3">
     <div className="row pt-3">
          <div className="col-12 d-flex">
          <BreadCrumbs />
          </div>
          </div>
      <div className="row">
        <div className="col-10 offset-1 py-3 text-center d-flex align-items-center justify-content-center">
          <img src="/images/sparks.png" alt="" />
          <h4 className="m-0">За Нас</h4>
        </div>
      </div>
      <div className="row">
        <div
          className="col-10 offset-1 d-flex text-center py-3 justify-content-center align-items-center w-100"
          style={{
            height: `25px`,
            borderRadius: `10px`,
            border: `0.8px solid #c2c2c2`,
            background: `#fff6f6`,
          }}
        >
          <p
            className="small m-0 mr-4"
            onClick={() => {
              setIsSelectedLeft(true);
            }}
          >
            Наша приказна
          </p>
          |
          <p
            className="small m-0 ml-4"
            onClick={() => {
              setIsSelectedLeft(false);
            }}
          >
            Наша работа
          </p>
        </div>
      </div>
      <div className="row">
        {isSelectedLeft
          ? contentData.map((data, index) => {
              if (data.isSelectedLeft == true) {
                return <AboutCard {...data} key={index} />;
              }
            })
          : contentData.map((data, index) => {
              if (data.isSelectedLeft == false) {
                return <AboutCard {...data} key={index} />;
              }
            })}
      </div>
    </div>
  );
};

export default AboutPage;
