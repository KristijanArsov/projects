import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const footerLists = [
    { text: `За нас`, link: `/about` },
    { text: `Контакт`, link: `/contact` },
    {
      text: `Локатор за продавницата`,
      link: `https://www.google.com/maps/place/Boutique+%E2%80%9EIgrali%C5%A1te%E2%80%9C/@41.9752921,21.3827376,13z/data=!4m10!1m2!2m1!1sskopje+igraliste!3m6!1s0x135415d370780d7f:0x144a59c79c946d63!8m2!3d42.0011145!4d21.4180245!15sChBza29wamUgaWdyYWxpc3RlkgEWdmludGFnZV9jbG90aGluZ19zdG9yZeABAA!16s%2Fg%2F11nn1fgmtl?entry=ttu`,
    },
    { text: `Често поставувани прашања`, link: `/faq` },
    {
      textArray: [
        {
          text: `Регистрирај се / Логирај се`,
          link: `/registerOne`,
        },
        {
          text: `Одлогирај се`,
          link: `/login`,
        },
      ],
    },
  ];
  const [fetchedData, setFetchedData] = useState<string[] | null>(null);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedUserData = localStorage.getItem("newUser");
      const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
      setFetchedData(parsedUserData);
    }
  }, []); 
  return (
    <footer className="pt-5">
      <div className="row pt-5">
        <div className="col-10 offset-1 pb-3">
          <h4>Следи ги нашите новости!</h4>
          <p>
            Биди дел од нашиот NewsLetter и дознавај за промоции, попусти и нови
            колекции
          </p>
        </div>
        <div className="col-10 offset-1">
          <form action="" className="d-flex flex-column">
            <label htmlFor="">E-mail адреса:</label>
            <input
              type="text"
              className="mb-3"
              style={{
                borderRadius: `18px`,
                border: `1.8px solid #C2C2C2`,
                height: `40px`,
              }}
            />
            <button type="submit" className="btn footerBtn">
              Зачлени се!
            </button>
          </form>
        </div>
        <div
          className="col-10 offset-1 py-3"
          style={{ borderBottom: `1px solid black` }}
        ></div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 pt-5 d-flex flex-column">
          {footerLists.map((li, index) => (
            <Link
              key={index}
              href={
                li.textArray
                  ? fetchedData
                    ? li.textArray[1].link
                    : li.textArray[0].link
                  : li.link
              }
              style={{ color: `#000`, textDecoration: `none` }}
            >
              {li.textArray ? (
                <>
                  {fetchedData ? (
                    <span>{li.textArray[1].text}</span>
                  ) : (
                    <span>{li.textArray[0].text}</span>
                  )}
                </>
              ) : (
                <span>{li.text}</span>
              )}
            </Link>
          ))}
        </div>
        <div className="col-10 offset-1 pb-5">
          <p>Сподели не нас</p>
          <div className="d-flex align-items-center">
            <i aria-hidden className="fa-brands fa-instagram"></i>
            <p className="m-0 ml-2" style={{ fontSize: `20px` }}>
              igralishte.sk
            </p>
          </div>
          <div className="d-flex align-items-center">
            <i aria-hidden className="fa-brands fa-tiktok"></i>
            <p className="m-0 ml-2" style={{ fontSize: `20px` }}>
              igralishte.sk
            </p>
          </div>
        </div>
        <div className="col-10 offset-1">
          <p className="small">
            Сите права задржани &copy; 2023 igralishtesk.mk
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
