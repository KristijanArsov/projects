import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const RegisterProfilePage: NextPage = () => {
  const [imageURL, setImageURL] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const homeAddressRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  
  let parsedUserData;
  if (typeof localStorage !== "undefined") {
    const storedUserData = localStorage.getItem("newUser");
    parsedUserData = storedUserData ? JSON.parse(storedUserData) : {};
  } else {
    console.error("localStorage is not supported in this environment");
  }

  const userData = parsedUserData || null;
  const changeInfo = (homeAddress: string, phoneNumber: string, bio: string) => {
    userData.homeAddress = homeAddress;
    userData.phone = phoneNumber;
    userData.bio = bio;
    localStorage.setItem("newUser", JSON.stringify(userData));
    alert("Information updated successfully!");
  };

  const handleSubmit = () => {
    const addressValue = homeAddressRef.current?.value || "";
    const phoneNumberValue = phoneRef.current?.value || "";
    const bioValue = bioRef.current?.value || "";
    changeInfo(addressValue, phoneNumberValue, bioValue);
    router.push(`/`);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedImage = localStorage.getItem("savedImage");
      if (savedImage) {
        setImageURL(savedImage);
      }
    }
  }, []);

  const convertImageToBase64 = (url: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx?.drawImage(img, 0, 0, img.width, img.height);
      const base64Image = canvas.toDataURL("image/jpeg");
      localStorage.setItem("savedImage", base64Image);
    };

    img.src = url;
  };
  const handleImageChange = () => {
    if (fileInputRef.current && fileInputRef.current.files) {
      const file = fileInputRef.current.files[0];

      if (file) {
        const temporaryURL = URL.createObjectURL(file);
        setImageURL(temporaryURL);
        convertImageToBase64(temporaryURL);
      }
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
      <div className="row pt-5 pb-3">
        <div className="col-10 offset-1 d-flex justify-content-center flex-column align-items-center">
          {imageURL && (
            <div>
              <img
                src={imageURL}
                style={{ borderRadius: `50%`, height: `150px`, width: `150px` }}
              />
            </div>
          )}
          <label htmlFor="photo_select1" className="custom-file-upload">
            Одбери слика
            <input
              type="file"
              ref={fileInputRef}
              id="photo_select1"
              style={{ display: `none` }}
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center flex-column  ">
          <form
            action=""
            className="login"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <label htmlFor="text" className="m-0 mb-1">
              Адреса
            </label>
            <input
              ref={homeAddressRef}
              type="text"
              defaultValue={` ${'Улица број' || homeAddressRef.current?.value}`}
              className="mb-2"
            />
            <label htmlFor="number" className="m-0 mb-1">
              Телефонски број
            </label>
            <input
              type="number"
              ref={phoneRef}
              placeholder="  +389 073 111 111"
              className="mb-2"
            />
            <label htmlFor="text" className="m-0 mb-1">
              Биографија
            </label>
            <textarea
              name="text"
              ref={bioRef}
              placeholder="  Something about yourself..."
              className="w-100"
              style={{ height: `80px` }}
            ></textarea>

            <button
              className="btn my-2 btn-costume-login w-50 text-center d-block py-2"
              type="submit"
              style={{ fontSize: `15px` }}
            >
              Заврши
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12 ">
          <Link
            href={`/`}
            className="text-dark"
            style={{ textDecoration: `underline` }}
          >
            Прескокни
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterProfilePage;
