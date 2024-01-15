import DropdownAccordion from "@/components/Accordion /DropdownAccordion";
import OrderCards from "@/components/OrderCards";
import { ProductType } from "@/type/type";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PreviewItemsCard from "@/components/PreviewItemsCard";

interface Props {
  products: ProductType[];
  dataRes: ProductType[];
}

const OrderPage: NextPage<Props> = ({ products, dataRes }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [data, setDataRes] = useState<ProductType[]>(dataRes);

  const handleClearLocalStorage = async () => {
    const updatedData = dataRes.map((product) => ({
      ...product,
      isFavorite: false,
      isOrdered: false,
      amount: 1,
    }));

    await Promise.all(
      updatedData.map(async (product) => {
        await fetch(`http://localhost:5001/Igralishteskopje/${product.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
      })
    );

    localStorage.clear();

    const res = await fetch(`http://localhost:5001/Igralishteskopje`);
    const updatedProducts = await res.json();

    setDataRes(updatedProducts);
  };

  useEffect(() => {
    const totalAmount = calcPrice();
    setTotalPrice(totalAmount);
  }, [dataRes]);

  const calcPrice = () => {
    let totalAmount = 0;
    let totalPercentageAmount = 0;
    let shippingCost = 150;

    data.map((prod) => {
      if (prod.isOrdered === true) {
        const currentPercentage = 20;
        const percentageAmount =
          (currentPercentage / 100) * prod.price * prod.amount;
        const discountedPrice = prod.price * prod.amount - percentageAmount;

        totalAmount += discountedPrice;
        totalPercentageAmount += percentageAmount;
      }
    });

    setPercentage(totalPercentageAmount);

    totalAmount += shippingCost;

    return totalAmount;
  };

  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-10 offset-1 d-flex text-center py-3 justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">
          <img
              src="/images/cart.png"
              className="p-2"
            />
            <Link
              href={`/order`}
              className="m-0 text-danger"
              style={{
                fontSize: `20px`,
                textDecoration: `none`,
                color: `#000`,
              }}
            >
              Кошничка{" "}
            </Link>
          </div>

          <div className="d-flex align-items-center">
          <img
              src="/images/ph_heart-straight-thin.png"
              className="p-2"
            />
            <Link
              href={`/order/favoritePage`}
              className="m-0"
              style={{
                fontSize: `20px`,
                textDecoration: `none`,
                color: `#000`,
              }}
            >
              Омилени
            </Link>
          </div>
        </div>
        <div
          className="col-10 offset-1"
          style={{ height: `0.7px`, width: `310px`, background: `#efc990` }}
        ></div>
      </div>
      {
        <>
          <div className="row pb-3">
            {data.map((product) => {
              if (product.isOrdered) {
                return (
                  <React.Fragment key={product.id}>
                    <OrderCards key={product.id} {...product} />

                    <div
                      className="col-10 offset-1 d-flex justify-content-between"
                      key={`info-${product.id}`}
                    >
                      <p>{product.name}</p>
                      <p>{product.price * product.amount} ден.</p>
                    </div>

                    <div
                      className="col-10 offset-1 d-flex justify-content-between"
                      key={`delivery-${product.id}`}
                    >
                      <p>+ достава до адреса</p>
                      <p>150 ден.</p>
                    </div>

                    <div
                      className="col-10 offset-1 d-flex justify-content-between"
                      key={`discount-${product.id}`}
                    >
                      <p className="text-danger">1x - 20% попуст!</p>
                      <p className="text-danger">- {percentage} ден.</p>
                    </div>

                    <div
                      className="col-10 offset-1"
                      key={`separator-${product.id}`}
                      style={{
                        height: `0.7px`,
                        width: `310px`,
                        background: `#efc990`,
                      }}
                    ></div>

                    <div className="col-10 offset-1 py-3" key={`total-${product.id}`}>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0">Вкупно:</p>
                        <p>{totalPrice} ден.</p>
                      </div>
                    </div>

                    <div
                      className="col-10 offset-1"
                      key={`separator-2-${product.id}`}
                      style={{
                        height: `0.7px`,
                        width: `310px`,
                        background: `#efc990`,
                      }}
                    ></div>

                    <div className="col-10 offset-1 py-3" key={`buttons-${product.id}`}>
                      <div className="d-flex justify-content-start align-items-center">
                        <Link
                          href={`/order/orderForm`}
                          className="btn w-50 d-block mr-4 p-1"
                          style={{
                            borderRadius: `15px`,
                            border: `1.5px solid #C2C2C2`,
                            background: `var(--Gold-gradient, linear-gradient(99deg, #FFF0BF -10.68%, #EFC990 18.14%, #FDD292 43.87%, rgba(240, 199, 73, 0.42) 81.17%, #D4AF37 100%))`,
                            color: `black`,
                            fontSize: `15px`,
                          }}
                        >
                          <button
                            className="btn"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Продолжи
                          </button>
                        </Link>

                        <i
                          aria-hidden
                          onClick={() => {
                            handleClearLocalStorage();
                            localStorage.clear();
                          }}
                          className="fa-solid fa-trash"
                          style={{ fontSize: `20px` }}
                        ></i>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
            })}
          </div>
        </>
      }
      <div className="row">
        <div className="col-12">
          <DropdownAccordion />
        </div>
      </div>
      <div className="row py-3">
        <div className="col-12 py-4">
          <h4>Други парчиња</h4>
        </div>
        <PreviewItemsCard data={products} />
      </div>
    </div>
  );
};

export default OrderPage;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`http://localhost:5001/Igralishteskopje`);
  const response = await fetch(
    `http://localhost:5001/Igralishteskopje?_start=0&_limit=6`
  );
  const products: ProductType[] = await response.json();
  const dataRes: ProductType[] = await res.json();
  return {
    props: {
      products: products,
      dataRes: dataRes,
    },
  };
};
