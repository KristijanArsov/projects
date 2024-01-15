import React, { useEffect, useState } from "react";
import { MutableRefObject } from "react";
import { NextRouter, useRouter } from "next/router";

interface Props {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  color: string;

}

const NavbarColorFilters: React.FC<Props> = ({ inputRef,color }) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const updateQuery = (
    inputRef: MutableRefObject<HTMLInputElement | null>,
    queryKey: string,
    queryValue: string | number,
    router: NextRouter
  ) => {
    if (inputRef.current?.checked) {
      setIsChecked(true)
      localStorage.setItem(`${queryKey}_checked`, `true`)
      router.push({
        pathname: "/shop",
        query: {
          ...router.query,
          [queryKey]: queryValue,
        },
      });
    } else {
      setIsChecked(false)
      localStorage.removeItem(`${queryKey}_checked`)
      const { [queryKey]: removedQuery, ...remainingQuery } = router.query;

      router.replace({
        pathname: "/shop",
        query: remainingQuery,
      });
    }
  };

  const handleCheckboxClick = () => {
    updateQuery(inputRef, color,color,router);
  };

  useEffect(()=> {
    const storedValue = localStorage.getItem(`${color}_checked`)
    setIsChecked(storedValue == `true`)
  },[color])

  return (
    <React.Fragment>
      <input type="checkbox" id={`${color}`} value={`${color}`} ref={inputRef} onClick={handleCheckboxClick} checked={isChecked} readOnly />
      <label htmlFor={`${color}`}>
        <span className={`${color}`}></span>
      </label>
    </React.Fragment>
  );
};

export default NavbarColorFilters;
