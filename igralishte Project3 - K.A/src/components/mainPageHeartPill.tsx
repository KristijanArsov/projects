import React from "react";
import CircleBtn from "./CircleBtn";

const MainPageHeartPill = () => {
  const cardStyle = {
    width: "320px",
    height: "258px",
  };

  const containerStyle = {
    paddingBottom: "130px",
  };

  return (
    <div className="row pt-5" style={containerStyle}>
      <div className="col-12 p-0 d-flex flex-row-reverse">
        <div className="position-relative">
          <img style={cardStyle} src="/images/landingPagePic4.png" alt="" />
          <CircleBtn
            link="/giftCard"
            heading="Gift Cards"
            paragraph="Избери уникатен подарок за твоите најблиски со нашиот избор на ultra fancy картички за подарок"
            placing1="-180px"
            placing2="92px"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageHeartPill;




