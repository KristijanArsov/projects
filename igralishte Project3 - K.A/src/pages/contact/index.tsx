import BreadCrumbs from "@/components/BreadCrumbs";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const contactPage: NextPage = () => {
  return (
    <div className="container pt-1 pb-3">
      <div className="row pt-3">
          <div className="col-12 d-flex">
          <BreadCrumbs />
          </div>
          </div>
      <div className="row">
        <div className="col-12 text-center pb-3 d-flex justify-content-center align-items-center">
          <h3 className="m-0">Контакт</h3>
          <img src="images/sparks.png" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img src="images/zshdane.png" alt="" className="w-100 d-block" />
          <h5 className="text-center py-3">Игралиште Дебар Маало</h5>
          <p className="text-center small w-75 d-block ml-auto mr-auto">
            Откриј ги нашите останати модни парчиња и колекции кои ги немаме
            изложено на нашата страна!
          </p>

          <Link
            href={
              "https://www.google.com/maps/place/Boutique+%E2%80%9EIgrali%C5%A1te%E2%80%9C/@41.9752921,21.3827376,13z/data=!4m10!1m2!2m1!1sskopje+igraliste!3m6!1s0x135415d370780d7f:0x144a59c79c946d63!8m2!3d42.0011145!4d21.4180245!15sChBza29wamUgaWdyYWxpc3RlkgEWdmludGFnZV9jbG90aGluZ19zdG9yZeABAA!16s%2Fg%2F11nn1fgmtl?entry=ttu"
            }
          >
            <p className="text-center text-dark">
              Костурски херои бр.6/14 Дебар Маало, Скопје
            </p>
          </Link>
          <div className="text-center pb-3">
            <h4 className="m-0">Телефон за контакт</h4>
            <Link href={`tel:+38978380406`} className="text-dark"><u>+389 78-380-406</u></Link>
          </div>
          <div className="text-center pb-5">
            <h4 className="m-0">Работно време</h4>
            <span className="">Понеделник - Петок: 12:00-19:00</span>
            <br />
            <span className="">Сабота: 12:00-17:00</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Link href={`/shop`}>
            <button
              className="btn py-2 px-3 footerBtn"
            >
              Кон продавницата
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
