import React, { useContext } from "react";
import { RestaurantType } from "../../interfaces/type";
import { CardContext } from "../../context/cardContext";
import { Link } from "react-router-dom";
import { CostumeCard } from "../../themes/styled";

const RestaurantCard: React.FC<RestaurantType> = ({
  image,
  businessname,
  restauranttype,
  reviews,
  id,
  isFavorite,
  reviewsList,
}) => {
  const { handleFavoriteRoute, calculateMiddleGroundRating } =
    useContext(CardContext);

  const avgRating = calculateMiddleGroundRating(reviewsList);

  return (
    <CostumeCard className="res">
      <Link
      
        to={`/restaurantDetails/${id}`}
        style={{ textDecoration: `none`, color: `black` }}
      >
        <div style={{ position: `relative` }}>
          <picture>
            <img src={image} alt="" style={{ borderRadius: `10px 10px 0 0` }} />
          </picture>
          <i
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
              event.preventDefault();
              handleFavoriteRoute(id);
            }}
            className={`${isFavorite ? `fas` : `far`} fa-heart fa-2x`}
            style={{
              color: `red`,
              textDecoration: `none`,
              position: `absolute`,
              top: `10px`,
              left: `10px`,
            }}
          ></i>
        </div>

        <div style={{ padding: `10px` }}>
          <h4>{businessname}</h4>
          <p style={{ color: `red`, fontWeight: `bold` }}>{restauranttype}</p>
          {reviews ? (
            <p style={{ fontWeight: `lighter` }}>
              Rating - {avgRating}
              <br />
              based on {reviews} reviews
            </p>
          ) : null}
        </div>
      </Link>
    </CostumeCard>
  );
};

export default RestaurantCard;
