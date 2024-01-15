import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
import AnnouncementBar from "./AnnouncementBar";

interface UserData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  homeAddress: string;
  phone: string;
  bio: string;
}

const Navbar: React.FC = () => {
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const NEWUSER_KEY = localStorage.getItem("newUser");
      const fetchedUserData = NEWUSER_KEY ? JSON.parse(NEWUSER_KEY) : null;
      setUserData(fetchedUserData);
    }
  }, []);

  const navbarInputRef = useRef<HTMLInputElement>(null);
  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top bg-light "
        style={{ height: `56px` }}
      >
        <i
          aria-hidden
          className={`fa-solid fa-chevron-left text-dark ${
            isSearchOpen ? `` : `d-none`
          } `}
          onClick={() => {
            router.push(`/`);
            toggleSearch();
          }}
        ></i>
        <div
          className={`form-inline ml-auto w-75 ${isSearchOpen ? `` : `d-none`}`}
        >
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="prebaruvaj"
            ref={navbarInputRef}
          />
        </div>
        <button
          className={`navbar-toggler ${isSearchOpen ? `d-none` : ``}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: `none`, borderRadius: `none` }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#333"
            className="w-6 h-6 navbar-toggler-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          className={`collapse navbar-collapse bg-light border-top pl-4`}
          id="navbarCollapse"
        >
          <ul className={`navbar-nav mr-auto ${isSearchOpen ? `d-none` : ``} `}>
            <p className="text-dark font-italic pt-4">
              <u className="font-weight-bold">Ново</u>
            </p>
            <NavbarDropdown
              title="Vintage облека"
              links={[
                { href: `/shop`, text: "Види ги сите" },
                { href: `/shop?tShirts=Блузи`, text: "Блузи" },
                { href: `/shop?jeans=Панталони`, text: "Панталони" },
                { href: `/shop?shorts=Здолништа`, text: "Здолништа / шорцеви" },
                { href: `/shop?fustani=Фустани`, text: "Фустани" },
                { href: `/shop?palta=Палта+и+јакни`, text: "Палта и јакни " },
                { href: `/shop?underwear=Долна+облека`, text: "Долна облека" },
              ]}
            />
            <NavbarDropdown
              title="Брендови"
              links={[
                { href: `/brandPage`, text: "Види ги сите" },
                { href: `/brandPage/2`, text: "Pinc PartyWear" },
                { href: `/brandPage/3`, text: "Factory Girl" },
                { href: `/brandPage/4`, text: "Main Days" },
                { href: `/brandPage/1`, text: "Зш да не" },
                { href: `/brandPage/5`, text: "Fraeil" },
                { href: `/brandPage/6`, text: "Urma" },
                { href: `/brandPage/7`, text: "Candle Nest" },
                { href: `/brandPage/8`, text: "Beyond Green" },
                { href: `/brandPage/9`, text: "Gatta" },
              ]}
            />
            <NavbarDropdown
              title="Аксесоари"
              links={[
                { href: `/shop?bags=Ташни`, text: "Ташни" },
                { href: `/shop?nakit=Накит`, text: "Накит" },
              ]}
            />
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                lifestyle
              </a>
            </li>
            <li className="nav-item">
              <Link
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                className="nav-link text-dark"
                href="/giftCard"
              >
                Подари картичка*
              </Link>
            </li>
            <li className="nav-item pb-5">
              <a className="nav-link text-danger" href="#">
                <i>Попуст</i>
              </a>
            </li>
            <Link
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              href={`/order`}
              className="p-1 "
              style={{ color: `black`, textDecoration: `none` }}
            >
              <div className="d-flex align-items-center">
                <img
                  src="/images/cart.png"
                  className="bg-light p-2 text-dark navCategoryStyles"
                ></img>
                <p className="m-0 ml-3 text-dark">Кошничка</p>
              </div>
            </Link>
            <Link
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              href={`/order/favoritePage`}
              className="p-1"
              style={{ color: `black`, textDecoration: `none` }}
            >
              <div className="d-flex align-items-center">
                <img
                  src="/images/ph_heart-straight-thin.png"
                  className="bg-light p-2 navCategoryStyles"
                ></img>
                <p className="m-0 ml-3 text-dark">Омилени</p>
              </div>
            </Link>
            {userData ? (
              <Link
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
                href={`/myProfile`}
                className="p-1"
                style={{ color: `black`, textDecoration: `none` }}
              >
                <div className="align-items-center d-flex">
                  <img
                    src="/images/ph_user-light.png"
                    className="bg-light p-2 navCategoryStyles"
                  ></img>
                  <p className="m-0 ml-3 text-dark">Мој профил</p>
                </div>
              </Link>
            ) : (
              <Link
                href={`/registerOne`}
                className="p-1"
                style={{ color: `black`, textDecoration: `none` }}
              >
                <div className="align-items-center d-flex">
                  <img
                    src="/images/ph_user-light.png"
                    className="bg-light p-2 navCategoryStyles"
                  ></img>
                  <p className="m-0 ml-3 text-dark">
                    Регистрирај се / Логирај се
                  </p>
                </div>
              </Link>
            )}
          </ul>
        </div>
        <Link
          className={`navbar-brand ${isSearchOpen ? `d-none` : ``}`}
          href="/"
        >
          <img src={`/images/Logo.png`} />
        </Link>

        {isSearchOpen ? (
          <i
            aria-hidden
            className={`fa-solid fa-magnifying-glass text-dark 
                 position-absolute magnifying-glass-position
              `}
            onClick={() => {
              if (navbarInputRef.current?.value) {
                router.push({
                  pathname: `/search`,
                  query: {
                    ...router.query,
                    titleValue: navbarInputRef.current.value.toLowerCase(),
                  },
                });
              } else {
                const { titleValue, ...remainingQuery } = router.query;

                router.replace({
                  pathname: `/`,
                  query: remainingQuery,
                });
              }
              if (navbarInputRef.current){
                navbarInputRef.current.value = ``;
              } 
            }}
          ></i>
        ) : (
          <i
            aria-hidden
            className={`fa-solid fa-magnifying-glass text-dark`}
            onClick={() => {
              toggleSearch();
            }}
          ></i>
        )}
      </nav>
      {router.pathname.startsWith(`/search`) ? null : <AnnouncementBar />}
    </>
  );
};

export default Navbar;
