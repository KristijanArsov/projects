import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useRef } from "react";

const ChangePasswordPage: NextPage = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordRef2 = useRef<HTMLInputElement>(null);
  const passwordRef3 = useRef<HTMLInputElement>(null);
  const router = useRouter();

  
  let parsedUserData;

if (typeof localStorage !== 'undefined') {
  const storedUserData = localStorage.getItem('newUser');
  parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
}

const oldPasswordData = parsedUserData || {}; 

  const changePassword = (oldPassword: string, newPassword: string) => {
    if (!oldPasswordData || oldPassword !== oldPasswordData.password) {
      alert('Old password is incorrect. Please try again.');
    }

    oldPasswordData.password = newPassword;

    localStorage.setItem('newUser', JSON.stringify(oldPasswordData));

    alert('Password updated successfully!');
    router.push(`/myProfile`);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwordRef.current && passwordRef2.current && passwordRef3.current) {
      const newPassword = passwordRef2.current.value;
      const confirmPassword = passwordRef3.current.value;

      if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
      } else {
        changePassword(passwordRef.current.value, newPassword);
      }
    }
  };

  return (
    <div className="login-familyFont">
      <div className="row">
        <div className="col-12 text-center">
          <img src="/images/Logo.png" style={{ width: `180px`, height: `40px` }} alt="" />
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-10 offset-1 d-flex justify-content-center flex-column login">
          <form onSubmit={handleSubmit}>
            <label htmlFor="password" className="m-0 mb-1">
              Стара лозинка
            </label>
            <input type="password" id="passwordChange" ref={passwordRef} required />
            <label htmlFor="passwordChange2" className="m-0 mb-1">
              Нова лозинка
            </label>
            <input type="password" id="passwordChange2" ref={passwordRef2} required />
            <label htmlFor="passwordChange3" className="m-0 mb-1">
              Повтори нова лозинка
            </label>
            <input type="password" id="passwordChange3" ref={passwordRef3} required />

            <button className="btn my-4 btn-costume-login w-50 d-block" type="submit">
              Зачувај
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
