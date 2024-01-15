import React, { useContext } from "react";
import { CardContext } from "../../../../context/cardContext";
import RestaurantCard from "../../../../components/Cards/RestaurantCard";
import { CostumeTitle } from "../../../../themes/styled";


const AllRestaurants = () => {
  const { posts } = useContext(CardContext);
  return (
    <div className="container">
      <CostumeTitle>all restaurants</CostumeTitle>
      <div className="flex" style={{ justifyContent: `between` }}>
        {posts.map((post) => {
          return <RestaurantCard key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
};

export default AllRestaurants;
