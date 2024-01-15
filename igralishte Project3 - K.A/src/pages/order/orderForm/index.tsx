import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface UserData {
  name?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  homeAddress?: string;
}

const OrderFormPage: NextPage = () => {
  const [parsedUserData, setParsedUserData] = useState<UserData>({});
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleEnterInfo = () => {
    if (typeof localStorage !== "undefined") {
      const storedUserData = localStorage.getItem("newUser");
      const userData = storedUserData ? JSON.parse(storedUserData) : {};
      if (isChecked) {
        setParsedUserData(userData);
      } else {
        setParsedUserData({});
      }
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  useEffect(() => {
    handleEnterInfo();
  }, [isChecked]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <img src="/images/sparks.png" alt="" />
          <p>
            Ве молиме внесете ги <br /> потребните информации
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center pb-3">
          <input
            type="checkbox"
            className="mr-3"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="m-0" htmlFor="">
            Внеси ги информациите од мојот профил
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form
            className="w-100 orderForms"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="name" className="w-100">
              Име*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-100"
              value={parsedUserData.name || ""}
              onChange={(e) =>
                setParsedUserData({ ...parsedUserData, name: e.target.value })
              }
            />
            <label htmlFor="name" className="w-100">
              Презиме*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-100"
              value={parsedUserData.lastName || ""}
              onChange={(e) =>
                setParsedUserData({ ...parsedUserData, name: e.target.value })
              }
              required
            />
            <label htmlFor="name" className="w-100">
              Адреса на живеење*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-100"
              value={parsedUserData.homeAddress || ""}
              onChange={(e) =>
                setParsedUserData({ ...parsedUserData, name: e.target.value })
              }
              required
            />
            <label htmlFor="name" className="w-100">
              Телефонски број*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-100"
              value={parsedUserData.phone || ""}
              onChange={(e) =>
                setParsedUserData({ ...parsedUserData, name: e.target.value })
              }
              required
            />
            <label htmlFor="name" className="w-100">
              Емаил адреса*
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-100"
              value={parsedUserData.email || ""}
              onChange={(e) =>
                setParsedUserData({ ...parsedUserData, name: e.target.value })
              }
              required
            />
            <div className="d-flex py-3">
              <input type="checkbox" className="mr-3" required />
              <p className="m-0" style={{ fontSize: `16px` }}>
                Сакам да добивам новости за идни попусти, нови колекции и
                промоции на мојата емаил адреса.
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="btn px-5 mr-4 footerBtn"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Нарачај
              </button>
              <Link
                href={`/order`}
                style={{
                  textDecoration: `underline`,
                  color: `black`,
                  fontSize: `16px`,
                }}
              >
                Откажи
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div
          className="modal fade"
          id="exampleModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog ml-auto mr-auto"
            style={{ marginTop: `50%`, height: `325px`, width: `320px` }}
            role="document"
          >
            <div className="modal-content">
              <div
                className="d-flex flex-column align-items-center text-center"
                style={{ padding: `10px` }}
              >
                <img src="/images/sparks.png" alt="" />
                <h5 className="modal-title pb-2" id="exampleModalLabel">
                  Вашата нарачка е успешна!
                </h5>
                <p className="pb-4">
                  Очекувајте потврда за вашата <br />
                  нарачката на вашата емаил адреса. <br />
                  Keep on shining *
                </p>
                <Link
                  href={`/shop`}
                  aria-label="Close"
                  className="btn px-5 footerBtn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Продолжи
                </Link>

                <Link
                  href={`/`}
                  aria-label="Close"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  style={{
                    textDecoration: `underline`,
                    fontSize: `16px`,
                    color: `#000`,
                  }}
                >
                  Кон почетна
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFormPage;
