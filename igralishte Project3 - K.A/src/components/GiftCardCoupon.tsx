import Link from "next/link";
import React, { useState } from "react";

interface Props {
  amount: string;
  id: string;
}

const GiftCardCoupon: React.FC<Props> = ({ amount, id }) => {
  const [areIngredientHidden, setAreIngredientHidden] = useState<string | null>(
    null
  );
  const toggleIngredientVisibility = (productId: string) => {
    if (areIngredientHidden === productId) {
      setAreIngredientHidden(null);
    } else {
      setAreIngredientHidden(productId);
    }
  };
  return (
    <>
      {areIngredientHidden !== id ? (
        <button
          className="w-100 giftCard-button btn"
          id={id}
          onClick={() => {
            toggleIngredientVisibility(id);
          }}
        >{amount}</button>
      ) : (
        <Link
          href={`/order/orderForm`}
          className="btn w-100 giftCard-button btn"
          style={{ textDecoration: `none`, color: `#000` }}
        >
          <p style={{ fontSize: `20px` }} className="m-0 text-dark">
           Додадено <br /> кон кошничката{" "}
          </p>
        </Link>
      )}
    </>
  );
};

export default GiftCardCoupon;
