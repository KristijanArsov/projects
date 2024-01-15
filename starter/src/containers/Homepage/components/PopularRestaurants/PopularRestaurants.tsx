import React, { useContext } from "react";
import { CardContext } from "../../../../context/cardContext";
import RestaurantCard from "../../../../components/Cards/RestaurantCard";
import { CostumeTitle } from "../../../../themes/styled";

const PopularRestaurants = () => {
  const { posts } = useContext(CardContext);

  const numberOfRestaurantsToShow = 10;
  const minimumReviews = 0;

  const filteredRestaurants = posts.filter((post) => {
    return post.reviewsList.length >= minimumReviews;
  });

  filteredRestaurants.sort(
    (a, b) => b.reviewsList.length - a.reviewsList.length
  );

  const topTenRestaurants = filteredRestaurants.slice(
    0,
    numberOfRestaurantsToShow
  );

  return (
    <div className="container">
      <CostumeTitle>our most popular restaurants</CostumeTitle>

      <div className="flex" style={{ justifyContent: `center` }}>
        {topTenRestaurants.map((post) => {
          return <RestaurantCard {...post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default PopularRestaurants;
