import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { DrinkContext } from "../context/DrinkContext";
const Header = () => {
  const { handleFilterDrinkByInputSearch, handleFilterDrinkByTitle } =
    useContext(DrinkContext);

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollEl = [
    {title: `Cocktail`,},
    { title: `Beer` },
    { title: `Ordinary Drink` },
    { title: `Shot` },
    { title: `Coffee \/ Tea` },
    { title: `Punch \/ Party Drink` },
  ];
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark custom-nav py-3"
      style={{ background: `#343434` }}
    >
      <svg
        width="50"
        height="28"
        preserveAspectRatio="xMidYMid meet"
        data-bbox="0 0 65.58 36.53"
        viewBox="0 0 65.58 36.53"
        xmlns="http://www.w3.org/2000/svg"
        data-type="color"
        role="presentation"
        aria-hidden="true"
      >
        <Link to={`/`}>
          <g>
            <g>
              <path
                fill="#fff"
                d="M30.53 11.04 17.52 0v36.53h13.01V11.04z"
                data-color="1"
              ></path>
              <path
                fill="#fff"
                d="M13.01 11.04 0 0v36.53h13.01V11.04z"
                data-color="1"
              ></path>
              <path
                fill="#fff"
                d="M48.06 0 35.05 11.04v25.49h13.01V0z"
                data-color="1"
              ></path>
              <path
                fill="#fff"
                d="m65.58 0-13 11.04v25.49h13V0z"
                data-color="1"
              ></path>
            </g>
          </g>
        </Link>
      </svg>

      <input
        type="checkbox"
        id="checkbox3"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="checkbox3 visuallyHidden d-none"
      />
      <label htmlFor="checkbox3" className="m-0">
        <div
          className="hamburger hamburger3"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-auto">
          {scrollEl.map((el, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link
                  data-target="#navbarSupportedContent"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className={`nav-link text-light ${
                    isOpen == true ? `border-bottom` : ``
                  }`}
                  to={`/FullMenu`}
                  onClick={() => {
                    handleFilterDrinkByTitle(el.title);
                  }}
                >
                  {el.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <form
          className="form-inline mt-5 my-lg-0"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (inputRef.current) {
              navigate(`/FullMenu`);
              handleFilterDrinkByInputSearch(inputRef.current?.value);
            }

            if (inputRef.current) inputRef.current.value = ``;
          }}
        >
          <input
            ref={inputRef}
            className="form-control mr-sm-2 bg-transparent text-light"
            type="search"
            placeholder="Search Drinks..."
            aria-label="Search"
          />
          <button
            data-target="#navbarSupportedContent"
            data-toggle="collapse"
            aria-expanded="false"
            className="btn btn-outline-light my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
