import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BreadCrumbs: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Link href={`/`} className="text-dark mr-1">
        Почетна &#62;
      </Link>
      {router.pathname === `/about` ? (
        <p>За Нас</p>
      ) : router.pathname === `/faq` ? (
        <p>Најчесто поставувани прашања</p>
      ) : router.pathname === `/contact` ? (
        <p>Контакт</p>
      ) : router.pathname === `/shop` ? (
        <p>
          {router.query
            ? Object.values(router.query).find(Boolean) || "Сите"
            : "Сите"}
        </p>
      ) : null}
    </>
  );
};

export default BreadCrumbs;
