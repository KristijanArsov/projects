import GiftCardCoupon from "@/components/GiftCardCoupon";
import GiftCards from "@/components/GiftCards";
import { NextPage } from "next";
import React from "react";

const GiftCardPage: NextPage = () => {
  const cardsData = [
    {
      src: "/images/gift-card.png",
      name: "Partygirl Gift card",
      top: `14px`,
      right: `0`,
    },
    {
      src: "/images/gift-card2.png",
      name: "Vintage Chick Gift Card",
      bottom: `14px`,
      left: `0`,
    },
    {
      src: "/images/gift-card3.png",
      name: "Wavy Baby Gift Card",
      bottom: `14px`,
      right: `0`,
    },
  ];

  const giftCards = [
    { id: "1", amount: "500 ден." },
    { id: "2", amount: "1000 ден." },
    { id: "3", amount: "2000 ден." },
    { id: "4", amount: "2500 ден." },
    { id: "5", amount: "4000 ден." },
  ];

  return (
    <div className="row pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 pb-3">
            <h3 className="text-center">Gift картички за подарок</h3>
          </div>
          {cardsData.map((giftCard, index) => {
            return (
              <div className="col-12 pb-3">
                <GiftCards key={index} {...giftCard} />
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-10 offset-1 text-center py-4">
            <h4>Одбери цена на подарок картичка:</h4>
          </div>
        </div>
        <div className="row">
          {giftCards.map((giftcard) => {
            return (
              <div className="col-10 offset-1 pb-4">
                <GiftCardCoupon key={giftcard.id} {...giftcard} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GiftCardPage;
