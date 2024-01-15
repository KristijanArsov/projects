import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const RegisterPage: NextPage = () => {
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordRef2 = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

const router = useRouter()

  const validatePassword = () => {
    const password1 = passwordRef.current?.value;
    const password2 = passwordRef2.current?.value;

    if (password1 === password2) {
      const newUserData = {
        name: `${nameRef.current?.value}`,
        lastName: `${lastNameRef.current?.value}`,
        email: `${emailRef.current?.value}`,
        password: `${passwordRef.current?.value}`,
        phone: ``,
        bio:``,
        homeAddress:``
      };

      const USER_KEY = 'newUser';
    localStorage.setItem(USER_KEY, JSON.stringify(newUserData));

    alert('Profile Created, Welcome!');
    router.push(`/registerOne/registerTwo/registerThree`);
    return true;
  } else {
    alert('Invalid credentials. Check if your information is correctly inputted.');
    return false;
  }

  };

  return (
    <div className="container login-familyFont">
      <div className="row">
        <div className="col-12 text-center">
          <img
            src="/images/Logo.png"
            style={{ width: `180px`, height: `40px` }}
            alt=""
          />
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-12 d-flex justify-content-center flex-column  ">
          <form action="" className="login" onSubmit={(event: React.FormEvent<HTMLFormElement>)=> {
            event.preventDefault()
            validatePassword()
          }}>
            <label htmlFor="name" className="m-0 mb-1">
              Име
            </label>
            <input type="name" id="name" placeholder="Ивана" ref={nameRef} className="mb-2" required />
            <label htmlFor="lastname" className="m-0 mb-1">
              Презиме
            </label>
            <input
            ref={lastNameRef} 
              type="lastname"
              id="lastname"
              className="mb-2"
              placeholder="Иванковска"
              required
            />
            <label htmlFor="email" className="m-0 mb-1">
              Емаил адреса
            </label>
            <input
            required
            ref={emailRef}
              type="email"
              id="email"
              placeholder="example@example.com"
              className="mb-2"
            />
            <label htmlFor="password" className="m-0 mb-1">
              Лозинка
            </label>
            <input type="password" id="password" className="mb-2" ref={passwordRef} required/>
            <label htmlFor="password2" className="m-0 mb-1">
              Потврди лозинка
            </label>
            <input type="password" id="password2" className="mb-2" ref={passwordRef2} required />
            <div className="d-flex align-items-center">
              <input
              required
                type="checkbox"
                style={{ width: `20px`, height: `20px` }}
              />
              <label htmlFor="checkbox" className="ml-3 m-0">
                Испраќај ми известувања за нови зделки и промоции
              </label>
            </div>
          
              <button className="btn my-4 btn-costume-login w-50" type="submit">
                Регистрирај се
              </button>
       
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p style={{ fontSize: `10px` }}>
            Со вашата регистрација се согласувате со{" "}
            <span style={{ textDecoration: `underline` }}>
              Правилата и <br /> Условите
            </span>{" "}
            за кориснички сајтови
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
