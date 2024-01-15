import Link from "next/link";
import React from "react";
import CircleBtn from "./CircleBtn";



const LandingPageCardOne: React.FC = () => {
  return (
    <div className="row pt-3" style={{ paddingBottom: `100px` }}>
      <div className="col-12 p-0 d-flex flex-row-reverse">
        <div className=" position-relative">
          <img src="/images/landingPage.png" alt="" className="img_main" />
         <CircleBtn  placing1="-120px" placing2="95px" heading="Valentines gal Колекција" paragraph="Погледнете ги свежите љубовни парчиња" />
        </div>
      </div>
    </div>
  );
};

export default LandingPageCardOne;
