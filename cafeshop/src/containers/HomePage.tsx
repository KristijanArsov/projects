import React from "react";
import MultipleBtnMenu from "../components/MultipleBtnMenu";
import Events from "../components/Events";

const HomePage = () => {
  return (
    <div className="row py-4">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 className="font-weight-bold mb-4">What's Your Poison?</h2>
          </div>
          <MultipleBtnMenu />
        </div>
        <Events />
      </div>
    </div>
  );
};

export default HomePage;
