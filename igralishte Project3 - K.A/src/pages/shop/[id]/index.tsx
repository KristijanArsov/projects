import DropdownAccordion from "@/components/Accordion /DropdownAccordion";
import BreadCrumbs from "@/components/BreadCrumbs";
import PreviewItemsCard from "@/components/PreviewItemsCard";
import { ProductType } from "@/type/type";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface Props {
  data: ProductType;
  products: ProductType[];
}

const ProductDetailPage: NextPage<Props> = ({ data, products }) => {
  const [quantity, setQuantity] = useState<number>(data.amount);
  const [isFavorite, setIsFavorite] = useState<boolean>(data.isFavorite);
  const [isOrdered, setIsOrdered] = useState<boolean>(data.isOrdered);
  const router = useRouter();

  const handlePutInCart = async (itemId: string) => {
    const apiUrl = `http://localhost:5001/Igralishteskopje/${itemId}`;

    const response = await fetch(apiUrl);
    const currentData = await response.json();

    const updatedItem = {
      ...currentData,
      isOrdered: !currentData.isOrdered,
    };

    await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    setIsOrdered(!isOrdered);

    const localStorageKey = `Product_${itemId} is in cart`;
    const storedOrdered = JSON.parse(
      localStorage.getItem(localStorageKey) || "[]"
    );

    const updatedOrdered = currentData.isOrdered
      ? storedOrdered.filter((id: string) => id !== itemId)
      : [...storedOrdered, itemId];

    localStorage.setItem(localStorageKey, JSON.stringify(updatedOrdered));
  };

  const handleFavoriteFunction = async (itemId: string) => {
    const apiUrl = `http://localhost:5001/Igralishteskopje/${itemId}`;

    const response = await fetch(apiUrl);

    const currentData = await response.json();
    const updatedItem = {
      ...currentData,
      isFavorite: !currentData.isFavorite,
    };

    await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    setIsFavorite(!isFavorite);

    const localStorageKey = `Product ${itemId} is favorited`;
    const storedFavorites = JSON.parse(
      localStorage.getItem(localStorageKey) || "[]"
    );

    const updatedFavorites = currentData.isFavorite
      ? storedFavorites.filter((id: string) => id !== itemId)
      : [...storedFavorites, itemId];

    localStorage.setItem(localStorageKey, JSON.stringify(updatedFavorites));
  };
  const handleOnPlusAmount = async (itemId: string) => {
    setQuantity((prevQuantity) => prevQuantity + 1);

    const apiUrl = `http://localhost:5001/Igralishteskopje/${itemId}`;
    const response = await fetch(apiUrl);

    const currentData = await response.json();

    const updatedItem = {
      ...currentData,
      id: itemId,
      amount: currentData.amount + 1,
    };

    await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });

    const localStorageKey = `PlusAmount=${itemId}`;
    const storedAmountPlus = JSON.parse(
      localStorage.getItem(localStorageKey) || "[]"
    );

    const updatedAmountPlus = currentData.amount
      ? storedAmountPlus.filter((id: string) => id !== itemId)
      : [...storedAmountPlus, itemId];

    localStorage.setItem(localStorageKey, JSON.stringify(updatedAmountPlus));
  };

  const handleOnMinusAmount = async (itemId: string) => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }

    const apiUrl = `http://localhost:5001/Igralishteskopje/${itemId}`;
    const response = await fetch(apiUrl);

    const currentData = await response.json();
    if (currentData.amount > 1) {
      const updatedItem = {
        ...currentData,
        id: itemId,
        amount: currentData.amount - 1,
      };

      await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      });
    }
    const localStorageKey = `MinusAmount=${itemId}`;
    const storedQuantityPlus = JSON.parse(
      localStorage.getItem(localStorageKey) || "[]"
    );

    const updatedQuantityPlus = currentData.amount
      ? storedQuantityPlus.filter((id: string) => id !== itemId)
      : [...storedQuantityPlus, itemId];

    localStorage.setItem(localStorageKey, JSON.stringify(updatedQuantityPlus));
  };

  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-12 d-flex">
          <BreadCrumbs /> {data.category} &gt; {data.name}
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3>{data.name}</h3>
        </div>
      </div>
      <div className="row">
        <div
          id="carouselExampleControls"
          className="carousel slide text-dark"
          data-ride="carousel"
          style={{ width: "100%", height: "480px" }}
        >
          <div className="carousel-inner">
            {data.images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  className="d-block w-100"
                  src={Object.values(img)[0]}
                  alt={`Slide ${index + 1}`}
                  style={{ height: `400px` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-3">
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <img src={`/images/arrow-back-left.png`} aria-hidden="true" />
          </a>
        </div>
        <div className="col-6 d-flex">
          {data.images.map((img, index) => {
            return (
              <img
                key={index}
                className="mr-2"
                src={Object.values(img)[0]}
                alt=""
                style={{ width: `60px`, height: `60px` }}
              />
            );
          })}
        </div>
        <div className="col-3">
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <img src={`/images/arrow-back-right.png`} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p style={{ fontSize: `22px` }}>{data.price} ден.</p>
          <p>{data.description}</p>
          <div className="d-flex align-items-center pb-3">
            <p className="mr-5 m-0">Количина</p>
            <div
              onClick={() => handleOnMinusAmount(data.id)}
              className="mr-3 d-flex align-items-center justify-content-center"
              style={{
                border: `0.7px solid #c2c2c2`,
                borderRadius: `50%`,
                width: `24px`,
                height: `24px`,
              }}
            >
              <i aria-hidden className="fa-solid fa-minus"></i>
            </div>
            <p style={{ fontFamily: `monospace` }} className="m-0">
              {quantity}
            </p>

            <div
              onClick={() => handleOnPlusAmount(data.id)}
              className="ml-3 d-flex align-items-center justify-content-center"
              style={{
                border: `0.7px solid #c2c2c2`,
                borderRadius: `50%`,
                width: `24px`,
                height: `24px`,
              }}
            >
              <i aria-hidden className="fa-solid fa-plus"></i>
            </div>
          </div>

          <div className="d-flex align-items-center pb-4">
            {isOrdered ? (
              <button
                className="btn detailPageCartBtn"
                onClick={() => {
                  handlePutInCart(data.id);
                }}
              >
                Додадено во кошничка
              </button>
            ) : (
              <button
                className="btn detailPageCartBtn"
                onClick={() => {
                  handlePutInCart(data.id);
                }}
              >
                Додај во кошничка
              </button>
            )}

            {!isFavorite ? (
              <i
                aria-hidden
                className={`far fa-heart ml-3 fa-2x`}
                onClick={() => {
                  handleFavoriteFunction(data.id);
                }}
              ></i>
            ) : (
              <i
                aria-hidden
                className={`fas fa-heart ml-3 fa-2x text-danger`}
                onClick={() => {
                  handleFavoriteFunction(data.id);
                }}
              ></i>
            )}
          </div>
          <div
            style={{ height: `0.7px`, width: `310px`, background: `#efc990` }}
          ></div>
        </div>
      </div>

      <div className="row py-2">
        <div className="col-12">
          <h4>
            Величина:{" "}
            <span
              className="px-2 py-1"
              style={{
                height: `20px`,
                width: `20px`,
                borderRadius: `3px`,
                border: `0.6px solid #ffdbdb`,
                background: `#ffdbdb`,
                fontSize: `16px`,
              }}
            >
              {data.size}
            </span>
            <span className="ml-3" style={{ fontSize: `16px` }}>
              {data.stock == `low` ? `*само едно парче` : null}
            </span>
          </h4>
          <p>
            Совет за величина: Ова парче е направено од материјал кој не се
            растегнува. Одговара на наведената величина
          </p>
          <div className="pb-3">
            <Link
              href={``}
              className="text-dark"
              style={{ textDecoration: `underline` }}
            >
              Види ги димензиите
            </Link>
          </div>
          <div
            style={{ height: `0.7px`, width: `310px`, background: `#efc990` }}
          ></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center">
            <p className="m-0" style={{ fontSize: `20px` }}>
              Боја:
            </p>
            <div
              className="ml-3"
              style={{
                width: `20px`,
                height: `20px`,
                padding: `10px`,
                borderRadius: `3px`,
                background: `${data.color}`,
              }}
            ></div>
            <p className="ml-3 m-0" style={{ fontSize: `16px` }}>
              {data.color}
            </p>
          </div>
          <h5 className="py-3 m-0">Материјал:</h5>
          <p>100% {data.material}</p>
          <p>Постава 100% {data.material}</p>
          <p>
            Состојба: {data.condition}{" "}
            <Link
              className="text-dark"
              style={{ textDecoration: `underline` }}
              href={``}
            >
              прочитај повеќе
            </Link>
          </p>
          <h5>Насоки за одржување:</h5>
          <p>{data.care}</p>
          <div
            style={{ height: `0.7px`, width: `310px`, background: `#efc990` }}
          ></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h4 className="py-3">Ознаки</h4>
          <div className="d-flex flex-wrap">
            {data.oznaki.map((oznaka, index) => {
              return (
                <p
                  key={index}
                  className="mr-3 text-center"
                  style={{
                    width: `60px`,
                    height: `26px`,
                    borderRadius: `7.7px`,
                    border: `0.8px solid #c2c2c2`,
                    boxShadow: `0px 0px 2px 0px #c2c2c2`,
                  }}
                >
                  {oznaka}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
         <DropdownAccordion/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 py-4">
          <h5>Други парчиња</h5>
        </div>
        <PreviewItemsCard data={products} />
      </div>
      <div className="row">
        <div className="col-12 d-flex flex-column">
          <img
            src="/images/cart.png"
            className="bg-light rounded p-2 text-dark position-fixed"
            style={{
              background: `#FFF6F6`,
              boxShadow: `0px 0px 1.8px 0px #C2C2C2`,
              border: `0,6px solid #C2C2C2`,
              bottom: `15px`,
              right: `25px`,
              zIndex: 1,
            }}
            onClick={() => {
              router.push(`/order`);
            }}
          ></img>
          <img
            src="/images/ph_heart-straight-thin.png"
            className="p-1 bg-light rounded p-2 position-fixed"
            style={{
              background: `#FFF6F6`,
              boxShadow: `0px 0px 1.8px 0px #C2C2C2`,
              border: `0,6px solid #C2C2C2`,
              bottom: `70px`,
              right: `25px`,
              zIndex: 1,
            }}
            onClick={() => {
              router.push(`/order/favoritePage`);
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:5001/Igralishteskopje`);

  const dataRes: ProductType[] = await res.json();

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
  let data: ProductType | undefined = undefined;
  if (params?.id) {
    const res = await fetch(
      `http://localhost:5001/Igralishteskopje/${params.id}`
    );
    data = await res.json();
  }

  const response = await fetch(
    `http://localhost:5001/Igralishteskopje?brand_like=${data?.brand}`
  );
  const products: ProductType[] = await response.json();

  return {
    props: {
      data: data,
      products: products,
    },
  };
};
