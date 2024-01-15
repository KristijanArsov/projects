import BreadCrumbs from "@/components/BreadCrumbs";
import ShopCards from "@/components/ShopCards";
import { MutableRefObject } from "react";
import { ProductType } from "@/type/type";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { NextRouter } from "next/router";
import NavbarFilters from "@/components/FilterNavBar/NavbarFilters";
import NavbarColorFilters from "@/components/FilterNavBar/NavbarColorFilters";

interface Props {
  dataRes: ProductType[];
}

const ProductPage: NextPage<Props> = ({ dataRes }) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const router = useRouter();

  const colorBlackInput = useRef<HTMLInputElement>(null);
  const jewelryInput = useRef<HTMLInputElement>(null);
  const bagsInput = useRef<HTMLInputElement>(null);
  const inputTShirt = useRef<HTMLInputElement>(null);
  const inputSkirt = useRef<HTMLInputElement>(null);
  const inputJacket = useRef<HTMLInputElement>(null);
  const inputJeans = useRef<HTMLInputElement>(null);
  const inputPincParty = useRef<HTMLInputElement>(null);
  const inputFactoryGirl = useRef<HTMLInputElement>(null);
  const inputShorts = useRef<HTMLInputElement>(null);
  const inputUnderwear = useRef<HTMLInputElement>(null);
  const inputTextTitle = useRef<HTMLInputElement>(null);
  const inputMainDays = useRef<HTMLInputElement>(null);
  const inputFraeil = useRef<HTMLInputElement>(null);
  const inputUrma = useRef<HTMLInputElement>(null);
  const inputCandleNest = useRef<HTMLInputElement>(null);
  const inputBeyondGreen = useRef<HTMLInputElement>(null);
  const inputGatta = useRef<HTMLInputElement>(null);
  const sizeXLInput= useRef<HTMLInputElement>(null);
  const sizeLInput = useRef<HTMLInputElement>(null);
  const sizeMInput = useRef<HTMLInputElement>(null);
  const colorBlueInput = useRef<HTMLInputElement>(null);
  const colorPinkInput = useRef<HTMLInputElement>(null);
  const colorPurpleInput = useRef<HTMLInputElement>(null);
  const sizeSInput = useRef<HTMLInputElement>(null);
  const colorRedInput = useRef<HTMLInputElement>(null);
  const colorGreenInput = useRef<HTMLInputElement>(null);
  const colorOrangeInput = useRef<HTMLInputElement>(null);
  const colorYellowInput = useRef<HTMLInputElement>(null);
  const colorGrayInput = useRef<HTMLInputElement>(null);
  const colorWhiteInput = useRef<HTMLInputElement>(null);
  const sizeXSInput = useRef<HTMLInputElement>(null);
  const price400 = useRef<HTMLInputElement>(null);
  const price1000 = useRef<HTMLInputElement>(null);
  const price2000 = useRef<HTMLInputElement>(null);
  const price2500 = useRef<HTMLInputElement>(null);
  const priceOver2500 = useRef<HTMLInputElement>(null);
  
  const filterOptions = [
    {
      inputRef: inputTShirt,
      queryKeyValue: "tShirts",
      label: "Блузи",
      itemsCount: 5,
    },
    {
      inputRef: inputJeans,
      queryKeyValue: "jeans",
      label: "Панталони",
      itemsCount: 2,
    },
    {
      inputRef: inputShorts,
      queryKeyValue: "shorts",
      label: "Здолништа / шорцеви",
      itemsCount: 2,
    },
    {
      inputRef: inputSkirt,
      queryKeyValue: "skirts",
      label: "Фустани",
      itemsCount: 2,
    },
    {
      inputRef: inputJacket,
      queryKeyValue: "jackets",
      label: "Палта и јакни",
      itemsCount: 3,
    },
    {
      inputRef: inputUnderwear,
      queryKeyValue: "underwear",
      label: "Долна облека",
      itemsCount: 2,
    },
  ];

  const filtersBrands = [
    {
      inputRef: inputPincParty,
      queryKeyValue: "pincParty",
      label: "Pinc PartyWear",
    },
    {
      inputRef: inputFactoryGirl,
      queryKeyValue: "factoryGirl",
      label: "Factory Girl",
    },
    {
      inputRef: inputMainDays,
      queryKeyValue: "mainDays",
      label: "Main Days",
    },
    { inputRef: inputFraeil, queryKeyValue: "fraeil", label: "Fraeil" },
    { inputRef: inputUrma, queryKeyValue: "urma", label: "Urma" },
    {
      inputRef: inputCandleNest,
      queryKeyValue: "candleNest",
      label: "Candle Nest",
    },
    {
      inputRef: inputBeyondGreen,
      queryKeyValue: "beyondGreen",
      label: "Beyond Green",
    },
    { inputRef: inputGatta, queryKeyValue: "gatta", label: "Gatta" },
  ];
  const filterAccessories = [
    {
      inputRef: jewelryInput,
      queryKeyValue: "nakit",
      label: "Накит",
    },
    {
      inputRef: bagsInput,
      queryKeyValue: "bags",
      label: "Ташни",
    },
  ];
  const sizeOptions = [
    { inputRef: sizeXLInput, queryKeyValue: "xl", label: `XL` },
    { inputRef: sizeLInput, queryKeyValue: "l", label: `L` },
    { inputRef: sizeMInput, queryKeyValue: "m", label: `M` },
    { inputRef: sizeSInput, queryKeyValue: "s", label: `S` },
    { inputRef: sizeXSInput, queryKeyValue: "xs", label: `XS` },
  ];

  const colorOptions = [
    { inputRef: colorRedInput, color: "red" },
    { inputRef: colorOrangeInput, color: "orange" },
    { inputRef: colorYellowInput, color: "yellow" },
    { inputRef: colorGreenInput, color: "green" },
    { inputRef: colorBlueInput, color: "blue" },
    { inputRef: colorPinkInput, color: "pink" },
    { inputRef: colorPurpleInput, color: "purple" },
    { inputRef: colorGrayInput, color: "gray" },
    { inputRef: colorWhiteInput, color: "white" },
    { inputRef: colorBlackInput, color: "black" },
  ];

  const priceOptions = [
    {
      inputRef: price400,
      queryKeyValue: "price_gte_100",
      label: 100,
      queryKeyValue2: `price_lte_400`,
      queryValue2: 400,
      priceLabel: `На попуст*`,
    },
    {
      inputRef: price1000,
      queryKeyValue: "price_gte_500",
      label: 500,
      queryKeyValue2: `price_lte_1000`,
      queryValue2: 1000,
      priceLabel: `500 - 1000 ден.`,
    },
    {
      inputRef: price2000,
      queryKeyValue: "price_gte_1500",
      label: 1500,
      queryKeyValue2: `price_lte_2000`,
      queryValue2: 2000,
      priceLabel: `1500 - 2000 ден.`,
    },
    {
      inputRef: price2500,
      queryKeyValue: "price_gte_2000",
      label: 2000,
      queryKeyValue2: `price_lte_2500`,
      queryValue2: 2500,
      priceLabel: `2000 - 2500 ден.`,
    },
    {
      inputRef: priceOver2500,
      queryKeyValue: "price_gte_2501",
      label: 2501,
      priceLabel: `Над 2500 ден.`,
    },
  ];

  return (
    <>
      {isFilterOpen == false && (
        <div className="container">
          <div className="row pt-3">
            <div className="col-12 d-flex">
              <BreadCrumbs />
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-12 d-flex justify-content-between">
              <div
                style={{
                  borderRadius: `6px`,
                  border: `0.624px solid #c2c2c2`,
                  width: `32px`,
                }}
                className="d-flex align-items-center justify-content-center"
                onClick={() => {
                  setIsFilterOpen(true);
                }}
              >
                <img src="/images/filterGlass.png" />
              </div>
              <div className="d-flex align-items-center">
                <p className="m-0 mr-2" style={{ fontSize: `16px` }}>
                  Подреди според
                </p>
                <select
                  value={router.query.value || ``}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    router.push({
                      pathname: `/shop`,
                      query: {
                        ...router.query,
                        value: event.target.value,
                      },
                    });
                  }}
                  style={{
                    borderRadius: `6px`,
                    border: `0.624px solid #c2c2c2`,
                    fontSize: `12px`,
                    width: `95px`,
                  }}
                >
                  <option disabled value={""}>
                    Filter by:
                  </option>
                  <option value="desc">Најнови - Најстари</option>
                  <option value="asc">Најстари - Најнови</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            {dataRes.length > 0 ? (
              dataRes.map((product) => {
                return <ShopCards key={product.id} {...product} />;
              })
            ) : (
              <p>Нема производи со поставените филтри</p>
            )}
          </div>
          <div className="row">
            <div className="col-10 offset-1 d-flex justify-content-center pagination">
              <a
                href=""
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      min: `1`,
                      max: `10`,
                      page: `1`,
                    },
                  });
                }}
              >
                &laquo;
              </a>
              <a
                href=""
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      min: `1`,
                      max: `10`,
                      page: `1`,
                    },
                  });
                }}
              >
                1
              </a>
              <a
                href=""
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      min: `11`,
                      max: `20`,
                      page: `2`,
                    },
                  });
                }}
              >
                2
              </a>
              <a
                href=""
                onClick={() => {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      min: `11`,
                      max: `20`,
                      page: `2`,
                    },
                  });
                }}
              >
                &raquo;
              </a>
            </div>
          </div>
        </div>
      )}
      <div
        className={`d-flex ${
          !isFilterOpen ? `filterMenuClosed` : `filterMenuOpen`
        } flex-column py-3 px-3 bg-brownish`}
        id="filterMenu"
        style={{ background: `#fdfdfd`, borderTop: `1px solid black` }}
      >
        <div className="row">
          <div className="col-12">
            <input
              ref={inputTextTitle}
              type="text"
              className="w-100 searchBarCostume"
              placeholder="    Пребарувај..."
            />
            <i
              aria-hidden
              onClick={() => {
                if (inputTextTitle.current?.value) {
                  router.push({
                    pathname: `/shop`,
                    query: {
                      ...router.query,
                      titleValue: inputTextTitle.current.value.toLowerCase(),
                    },
                  });
                } else {
                  const { titleValue, ...remainingQuery } = router.query;

                  router.replace({
                    pathname: `/shop`,
                    query: remainingQuery,
                  });
                }
                if (inputTextTitle.current){
                  inputTextTitle.current.value = ``;
                }
              }}
              style={{ top: `10px` }}
              className={`fa-solid fa-magnifying-glass text-dark ${
                isFilterOpen
                  ? `position-absolute magnifying-glass-position`
                  : ``
              }`}
            ></i>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Категорија</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          {filterOptions.map((filter) => {
            return <NavbarFilters key={filter.label} {...filter} />;
          })}
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Брендови</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          {filtersBrands.map((filter) => {
            return <NavbarFilters key={filter.label} {...filter} />;
          })}
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Аксесоари</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          {filterAccessories.map((filter) => {
            return <NavbarFilters key={filter.label} {...filter} />;
          })}
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Величина</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          {sizeOptions.map((filter) => {
            return <NavbarFilters key={filter.label} {...filter} />;
          })}
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Боја</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row colorsFilter d-flex ml-3 d-block w-50">
          {colorOptions.map((filter) => {
            return <NavbarColorFilters key={filter.color} {...filter} />;
          })}
        </div>
        <div className="row">
          <div className="col-10 offset-1 py-3 ">
            <h2 className="filterCategories">Цена</h2>
            <div
              style={{ borderBottom: `0.8px solid #fabc5f`, width: `127px` }}
            ></div>
          </div>
        </div>
        <div className="row filterMenuChecks">
          {priceOptions.map((filter) => {
            return <NavbarFilters key={filter.queryKeyValue} {...filter} />;
          })}
        </div>
        {isFilterOpen !== false && (
          <div className="row">
            <div className="col-10 offset-1" style={{ padding: `70px 0px` }}>
              <div
                className="position-fixed pt-3"
                style={{
                  bottom: `0`,
                  left: `0`,
                  right: `0`,
                  background: `#fdfdfd`,
                }}
              >
                <button
                  type="submit"
                  className="btn w-75 ml-auto mr-auto d-block footerBtn"
                  onClick={() => {
                    setIsFilterOpen(false);
                  }}
                >
                  Филтрирај
                </button>
                <p
                  onClick={() => {
                    setIsFilterOpen(false);
                    router.push({
                      pathname: `/shop`,
                      query: {},
                    });
                  }}
                  className="text-center"
                  style={{ textDecoration: `underline`, fontSize: `20px` }}
                >
                  oткажи
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;

function normalizeFilters(
  filterType: string,
  filter: number | string | string[] | undefined
) {
  return Array.isArray(filter)
    ? filter.map((value) => `${filterType}_like=${value}`)
    : filter
    ? [`${filterType}_like=${filter}`]
    : [];
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const filtersConfig = {
    category: [
      "jewelry",
      "bags",
      "tShirts",
      "skirts",
      "jackets",
      "underwear",
      "jeans",
      "shorts",
      "titleValue",
    ],
    brand: [
      "factoryGirl",
      "mainDays",
      "fraeil",
      "urma",
      "candleNest",
      "beyondGreen",
      "gatta",
      "pincParty",
    ],
    size: ["xl", "l", "m", "s", "xs"],
    color: [
      "red",
      "green",
      "orange",
      "yellow",
      "blue",
      "pink",
      "purple",
      "gray",
      "white",
      "black",
    ],
  };

  const priceRanges = [
    { gte: 100, lte: 400 },
    { gte: 500, lte: 1000 },
    { gte: 1500, lte: 2000 },
    { gte: 2000, lte: 2500 },
    { gte: 2501 },
  ];

  const filters: string[] = [];
  const priceFilters: string[] = [];

  for (const [type, values] of Object.entries(filtersConfig)) {
    values.map((value) => {
      filters.push(...normalizeFilters(type, query[value]));
    });
  }

  priceRanges.map((range) => {
    const { gte, lte } = range;
    if (query[`price_gte_${gte}`] && query[`price_lte_${lte}`]) {
      priceFilters.push(`price_gte=${gte}&price_lte=${lte}`);
    } else if (query[`price_gte_${gte}`]) {
      priceFilters.push(`price_gte=${gte}`);
    }
  });

  const allFilters = [...filters, ...priceFilters];

  const queryParams = allFilters.join("&");

  const page = Array.isArray(query.page) ? query.page[0] : query.page || "1";
  const start = (parseInt(page) - 1) * 10;
  const limit = 10;

  let res;

  if (queryParams) {
    res = await fetch(`http://localhost:5001/Igralishteskopje?${queryParams}`);
  } else if (query.value) {
    res = await fetch(
      `http://localhost:5001/Igralishteskopje?_sort=date&_order=${query.value}`
    );
  } else {
    res = await fetch(
      `http://localhost:5001/Igralishteskopje?_start=${start}&_limit=${limit}&page=${page}`
    );
  }

  const dataRes: ProductType[] | null = await (res ? res.json() : null);

  return {
    props: {
      dataRes: dataRes,
    },
  };
};
