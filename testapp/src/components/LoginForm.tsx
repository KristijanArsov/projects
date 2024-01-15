import React, { useRef } from "react";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const LoginForm = () => {
    
  const userName = {
    username: `kice`,
    password: `123`,
  };

  const usernameRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)


const handleSubmit = () => {
    if(userName.password == passRef.current?.value && userName.username == usernameRef.current?.value){
        router.push(`/`)
    }
}
const router = useRouter()
  return (
    <div className="row py-5">
      <div className="col-4 offset-4">
        <form
          className={`d-flex flex-column justify-content-center align-items-center p-4 ${styles.borderForm}`}
          onSubmit={(event: React.FormEvent<HTMLFormElement>)=> {
            event.preventDefault()
            handleSubmit()
          }}
        >
          <input
            ref={usernameRef}
            type="text"
            className={`w-75 py-1 mb-3 d-block ${styles.costumeInput}`}
            placeholder="username"
          />
          <input
          ref={passRef}
            type="password"
            className={`w-75 mb-3 py-1 d-block ${styles.costumeInput}`}
            placeholder="password"
          />
          <button className={`btn ${styles.costumeBtn}`}>login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
