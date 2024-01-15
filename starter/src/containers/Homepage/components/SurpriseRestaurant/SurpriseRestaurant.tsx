import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../../../context/cardContext";
import { CostumeTitle, Button } from "../../../../themes/styled";

const SurpriseRestaurant = () => {
  const { posts } = useContext(CardContext);
  const navigate = useNavigate();

  const handleSurpriseMeClick = () => {
    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomRestaurant = posts[randomIndex];
    navigate(`/restaurantDetails/${randomRestaurant.id}`);
  };
  return (
    <div className="container">
      <CostumeTitle>don't know what to eat?</CostumeTitle>
      <Button
        onClick={() => {
          handleSurpriseMeClick();
        }}
      >
        Surprise me!
      </Button>
    </div>
  );
};

export default SurpriseRestaurant;
