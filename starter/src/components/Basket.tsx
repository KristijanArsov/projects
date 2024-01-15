import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductsContext";
import minus_sign from "../assets/images/minus.png";
import plus_sign from "../assets/images/plus.png";

const Basket = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { products, onAdd, onRemoveItem, onPlaceOrder } =
    useContext(ProductContext);

  const calcPrice = () => {
    let totalAmount = 0;
    products.forEach((prod) => {
      if (prod.selected) {
        totalAmount += prod.amount * prod.price;
      }
    });
    return totalAmount;
  };

  useEffect(() => {
    const totalAmount = calcPrice();
    setTotalPrice(totalAmount);
  }, [products]);

  return (
    <>
      <div className="row">
        {products.map((product) => {
          if (product.selected) {
            return (
              <div className="col-4 offset-4 border d-flex align-items-center">
                <div>
                  <p className="m-0 p-2">{product.name}</p>
                </div>

                <div>
                  <img
                    src={minus_sign}
                    alt=""
                    style={{ width: `5%` }}
                    onClick={() => {
                      onRemoveItem(product);
                      console.log(product.amount);
                    }}
                  />
                  <span>{product.amount}</span>
                  <img
                    src={plus_sign}
                    alt=""
                    style={{ width: `5%` }}
                    onClick={() => {
                      onAdd(product.id);
                      console.log(product.amount);
                    }}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="row py-5">
        <div className="col-4 offset-4 d-flex flex-column justify-content-center align-items-center">
          <p>Total Amount:{totalPrice} den</p>
          <button className="btn btn-primary" onClick={onPlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Basket;
