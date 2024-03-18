import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { ProductType } from "../type/type";
import ReturnPolicy from "./ReturnPolicy";

const DetailsPage = () => {
  const { productData } = useContext(StoreContext);
  const { id } = useParams();

  const [amount, setAmount] = useState<number>(1);

  const handleAmountPlus = () => {
    setAmount((prevAmount) => {
      return prevAmount + 1;
    });
  };

  const handleAmountMinus = () => {
    setAmount((prevAmount): number => {
      if (prevAmount && prevAmount > 1) {
        return prevAmount - 1;
      }
      return prevAmount || 1;
    });
  };

  const handleOrder = () => {
    setAmount(1);
  };

  let findProduct: ProductType | undefined = undefined;

  if (id) {
    findProduct = productData.find((prod) => prod.id == +id);
  }

  if (!findProduct) {
    return <p>Error 404 Product Not Found</p>;
  }

  const rating = findProduct.rating.rate;
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  const starArray = Array(fullStars)
    .fill(null)
    .map((_, index) => {
      return (
        <i style={{ color: `#E6D8A0` }} key={index} className="fa fa-star"></i>
      );
    });
  if (decimalPart > 0) {
    starArray.push(
      <i
        key="half"
        style={{ color: `#E6D8A0` }}
        className="fa-regular fa-star-half-stroke"
      ></i>
    );
  }

  const remainingStars = 5 - Math.ceil(rating);
  starArray.push(
    ...Array(remainingStars)
      .fill(null)
      .map((_, index) => {
        return (
          <i
            style={{ color: `#E6D8A0` }}
            key={`empty-${index}`}
            className="fa fa-star-o"
          ></i>
        );
      })
  );

  return (
    <div className="container-fluid">
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Your Order Was Successful
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Click Close to Continue Shopping</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-3">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 d-flex justify-content-center custom-col align-items-center">
              <img
                className="w-75 ms-auto me-auto d-block"
                src={findProduct.image}
                style={{objectFit: `contain` }}
              />
              <div className="ms-3">
                <h5 className="mt-5 pb-3 fw-bold text-uppercase">
                  {findProduct.title}
                </h5>
                <p className="border-top pt-3 small">
                  <span className="fw-bold">Category: </span>
                  {findProduct.category}
                </p>
                <p className="small">
                  <span className="fw-bold">Rating: </span>
                  {starArray}
                </p>
                <p>
                  <span className="fw-bold">Description: </span>
                  {findProduct.description}
                </p>
                <div className="d-flex">
                  <p>
                    <span className="fw-bold">
                      Price: <br />
                    </span>
                    ${findProduct.price}
                  </p>
                </div>

                <p>Select Amount:</p>
                <div className="ms-2 d-flex align-items-baseline pb-2">
                  <i
                    className="fa-solid fa-minus text-center me-2"
                    style={{
                      border: `0.5px solid black`,
                      borderRadius: `50%`,
                      height: `30px`,
                      width: `30px`,
                      paddingTop: `6px`,
                    }}
                    onClick={handleAmountMinus}
                  ></i>
                  <p className="m-0">{amount}</p>
                  <i
                    className="fa-solid fa-plus text-center ms-2"
                    style={{
                      border: `0.5px solid black`,
                      borderRadius: `50%`,
                      height: `30px`,
                      width: `30px`,
                      paddingTop: `6px`,
                    }}
                    onClick={handleAmountPlus}
                  ></i>
                </div>
                <p className="mb-1">Total: ${amount * findProduct.price}</p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={handleOrder}
                  className="btn text-light"
                  style={{ background: `#35374b`, width: `100px` }}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              <ReturnPolicy />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
