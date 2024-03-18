import React from "react";
import { Link } from "react-router-dom";
import { ArtistType } from "../type/type";

const ArtistCards: React.FC<ArtistType> = ({ id, cover, name }) => {
  return (
    <div className="col-md-4 col-10 offset-1 preview-card position-relative custom-screen" key={id} style={{height:`360px`}}>
      <Link to={`/details/${id}`}>
        <div className="card-heroSection p-3 ">
          <img
            className="card-img-top"
            src={`../img/covers/${cover}.jpg`}
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="m-0">Check out Artist: {name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArtistCards;
