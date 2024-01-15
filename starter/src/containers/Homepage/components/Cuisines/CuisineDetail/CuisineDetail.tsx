import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CardContext } from "../../../../../context/cardContext";
import RestaurantCard from "../../../../../components/Cards/RestaurantCard";
import { CostumeTitle } from "../../../../../themes/styled";

const CuisineDetail = () => {
  const { posts } = useContext(CardContext);
  const { type } = useParams();

  const matchingCuisines = posts.filter(
    (post) => post.restauranttype.toLowerCase() === type?.toLowerCase()
  );

  if (matchingCuisines.length === 0) {
    return <div>Error 404 Can't filter restaurants</div>;
  }

  return (
    <div className="container">
      <CostumeTitle>{type} restaurants</CostumeTitle>
      <div className="flex">
        {matchingCuisines.map((res) => {
          return <RestaurantCard key={res.id} {...res} />;
        })}
      </div>
    </div>
  );
};

export default CuisineDetail;
