import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";

const LoginPage: NextPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
const router = useRouter()

const handleLogin = () => {
  const emailData = usernameRef.current?.value
  const passwordData = passwordRef.current?.value
  let parsedUserData
  if (typeof localStorage !== 'undefined') {
    const storedUserData = localStorage.getItem('newUser');
     parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  }
  if (emailData === parsedUserData.email && passwordData === parsedUserData.password) {
    alert('Login successful!'); 
    router.push(`/`)
  } else {
    alert('Invalid credentials. Please try again.');
  }
}


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
        <div className="col-10 offset-1 d-flex justify-content-center flex-column login ">
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handleLogin()
            }}
          >
            <label htmlFor="email" className="m-0 mb-1">
              Email адреса
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="mb-2"
              ref={usernameRef}
              required
            />
            <label htmlFor="password" className="m-0 mb-1">
              Лозинка
            </label>
            <input type="password" id="password" ref={passwordRef} required />
            <Link
            href={``}
              className="pt-2"
              style={{ color: `#8a8328`, textDecoration: `underline` }}
            >
              Ја заборави лозинката?
            </Link>
            <button
              className="btn text-light my-4 btn-costume-login w-100"
              type="submit"
            >
              Најави се
            </button>
          </form>
        </div>
      </div>
      <div className="row pb-1">
        <div className="col-12 text-center">
          <p>или</p>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-12 d-flex justify-content-center ">
          <Link href={`https://accounts.google.com/signin`} className="login-links py-2 text-dark">
            Регистрирај се преку Google
          </Link>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-12 d-flex justify-content-center ">
          <Link href={`https://www.facebook.com/?locale=mk_MK`} className="login-links py-2 text-dark">
            Регистрирај се преку Facebook
          </Link>
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-12 d-flex justify-content-center ">
          <p>
            Немаш профил?{" "}
            <Link
              href={`/registerOne`}
              style={{ color: `#8a8328`, textDecoration: `underline` }}
            >
              Регистрирај се
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 pt-5">
          <p className="text-center" style={{ fontSize: `8px` }}>
            Сите права задржани @ Игралиште Скопје
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
