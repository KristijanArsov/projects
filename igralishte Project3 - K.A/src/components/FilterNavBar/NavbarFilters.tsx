import React, { useEffect, useState } from "react";
import { MutableRefObject } from "react";
import { NextRouter, useRouter } from "next/router";

interface Props {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  queryKeyValue: string;
  label: string| number;
  itemsCount?: number;
  queryKeyValue2?: string,
  queryValue2?: string | number,
  priceLabel?: string
}

const NavbarFilters: React.FC<Props> = ({ inputRef, queryKeyValue, label, itemsCount, queryKeyValue2,queryValue2,priceLabel }) => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const update = (
    inputRef: MutableRefObject<HTMLInputElement | null>,
    queryKey: string,
    queryValue: string | number,
    router: NextRouter,
    queryKeyValue2?: string,
    queryValue2?: string | number
  ) => {
    if (inputRef.current?.checked) {
      setIsChecked(true);
      localStorage.setItem(`${queryKey}_checked`, "true");
      const queryObject = {
        [queryKey]: queryValue,
        ...(queryKeyValue2 !== undefined && queryValue2 !== undefined && {
          [queryKeyValue2]: queryValue2,
        }),
      };
      router.push({
        pathname: '/shop',
        query: {
          ...router.query,
          ...queryObject,
        },
      });
    } else {
      setIsChecked(false);
      localStorage.removeItem(`${queryKey}_checked`);
      const { [queryKey]: removedQuery, [queryKeyValue2 as string]: removeQuery2, ...remainingQuery } = router.query;
      router.replace({
        pathname: '/shop',
        query: remainingQuery,
      });
    }
  };

  const handleCheckboxClick = () => {
    update(inputRef, queryKeyValue, label, router,queryKeyValue2,queryValue2);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(`${queryKeyValue}_checked`);
    setIsChecked(storedValue === "true");
  }, [queryKeyValue]);

  return (
    <div className="col-10 offset-1">
      <input
        type="checkbox"
        ref={inputRef}
        onClick={handleCheckboxClick}
        checked={isChecked}
        readOnly
      />
      <label className={`${priceLabel == `На попуст*`? `text-danger`: null}`}>
       {priceLabel ? `${priceLabel}` : `${label}`} {itemsCount? `( ${itemsCount} )` : null}
      </label>
    </div>
  );
};

export default NavbarFilters;
