import React from "react";
import CircleBtn from "./CircleBtn";

const LandingPageCardTwo:React.FC = () => {
  return (
    <div className="row pt-5" style={{paddingBottom:`100px`}}>
        <div className="col-12 p-0">
        <div className=" position-relative">
        <img
          src="/images/landingPage2.png"
          alt=""
          className="img_main"
        />
      <CircleBtn heading="Козметика & аксесоари" paragraph="Погледни ги свежите љубовни парчиња" placing1="-120px" placing2="40px"/>
      </div>
        </div>
        
      
    </div>
  );
};

export default LandingPageCardTwo;
