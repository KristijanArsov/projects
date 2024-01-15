import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface UserData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  homeAddress: string;
  phone: string;
  bio: string;
}

const MyProfile: React.FC = () => {
  const [imageURL, setImageURL] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userData, setUserData] = useState<UserData | null>(null);



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

  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const homeAddressRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);

  const changeInfo = (
    newName: string,
    newLastName: string,
    phoneNumber: string,
    homeAddress: string,
    bio: string
  ) => {
    if (userData) {
      const updatedUserData: UserData = {
        ...userData,
        name: newName,
        lastName: newLastName,
        phone: phoneNumber,
        homeAddress: homeAddress,
        bio: bio,
      };
      setUserData(updatedUserData);
      localStorage.setItem("newUser", JSON.stringify(updatedUserData));
      alert("Information updated successfully!");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameValue = nameRef.current?.value || "";
    const lastNameValue = lastNameRef.current?.value || "";
    const phoneNumberValue = phoneRef.current?.value || "";
    const homeAddressValue = homeAddressRef.current?.value || "";
    const bioValue = bioRef.current?.value || "";
    changeInfo(nameValue, lastNameValue, phoneNumberValue,homeAddressValue, bioValue);
  };
  useEffect(() => {
    const storedUserData = localStorage.getItem("newUser");
    const parsedUserData: UserData = storedUserData
      ? JSON.parse(storedUserData)
      : {};
    setUserData(parsedUserData);

    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
      setImageURL(savedImage);
    }
  }, []);

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
            className="login"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handleSubmit(event);
            }}
          >
            <label htmlFor="name" className="m-0 mb-1">
              Име
            </label>
            <input
              type="name"
              id="name"
              className="mb-2"
              defaultValue={userData?.name}
              ref={nameRef}
            />
            <label htmlFor="lastname" className="m-0 mb-1">
              Презиме
            </label>
            <input
              type="lastname"
              id="lastname"
              className="mb-2"
              ref={lastNameRef}
              defaultValue={userData?.lastName}
            />
            <label htmlFor="email" className="m-0 mb-1">
              Емаил адреса
            </label>
            <input
              type="email"
              id="email"
              className="mb-2"
              defaultValue={userData?.email}
            />
            <label htmlFor="password" className="m-0 mb-1">
              Лозинка
            </label>

            <input
              type="password"
              id="password"
              defaultValue={userData?.password}
              readOnly
            />
            <div>
              <Link
                href={`/login/changePassword`}
                style={{
                  color: `#000`,
                  textDecoration: `underline`,
                  fontSize: `10px`,
                }}
              >
                Промени лозинка
              </Link>
            </div>
            <label htmlFor="number" className="m-0 mb-1">
              Адреса
            </label>
            <input
              ref={homeAddressRef}
              type="text"
              id="homeAddress"
              placeholder="  Улица број "
              className="mb-2"
              defaultValue={userData?.homeAddress}
            />
            <label htmlFor="number" className="m-0 mb-1">
              Телефонски број
            </label>
            <input
              ref={phoneRef}
              type="number"
              id="numberPhone"
              placeholder="  +389 76-333-333"
              className="mb-2"
              defaultValue={userData?.phone}
            />
            <label htmlFor="text" className="m-0 mb-1">
              Биографија
            </label>
            <textarea
              name="text"
              defaultValue={userData?.bio}
              className="w-100"
              style={{ height: `80px` }}
              ref={bioRef}
            ></textarea>

            <button
              className="btn my-2 btn-costume-login w-50 text-center d-block py-2"
              type="submit"
              style={{ fontSize: `15px` }}
            >
              Зачувај
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
