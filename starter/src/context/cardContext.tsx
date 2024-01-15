import React, { createContext, useEffect, useState } from "react";
import { RestaurantType, Review } from "../interfaces/type";

interface CardContextType {
  posts: RestaurantType[];
  handleFilterByTitle: (type: string) => void;
  handleFavoriteRoute: (id: string) => void;
  addReview: (id: string, newReview: RestaurantType) => void;
  calculateMiddleGroundRating: (reviewList: Review[]) => number;
}

export const CardContext = createContext<CardContextType>({
  posts: [],
  handleFavoriteRoute: () => {},
  handleFilterByTitle: () => {},
  addReview: () => {},
  calculateMiddleGroundRating: (reviewList: Review[]) => 0,
});

interface Props {
  children: React.ReactNode;
}

const CardContextConstructor: React.FC<Props> = ({ children }) => {
  const [posts, setPosts] = useState<RestaurantType[]>([]);
  const [filtered, setFiltered] = useState<RestaurantType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5001/restaurants`)
      .then((res) => res.json())
      .then((data) => {
        debugger
        setPosts(data);
      });
  }, []);

  useEffect(() => {
    setFiltered(posts);
  }, [posts, filtered]);

  const handleFilterByTitle = (type: string) => {
    const tmpRestaurants = posts.filter((post) => post.restauranttype == type);
    setFiltered(tmpRestaurants);
  };

  const handleFavoriteRoute = (id: string) => {
    const update = posts.map((post) => {
      if (post.id == id) {
        return {
          ...post,
          isFavorite: !post.isFavorite,
        };
      }
      return post;
    });
    setPosts(update);
  };

  const addReview = (id: string, newReview: RestaurantType) => {
    fetch(`http://localhost:5001/restaurants/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to add the review.");
        }
      })
      .then((addedReview) => {
        setPosts((prevData) =>
          prevData.map((restaurant) => {
            if (restaurant.id === id) {
              return addedReview;
            }
            return restaurant;
          })
        );
      })
      .catch((error) => {
        console.error("Error adding review:", error);
      });
  };
  

  const calculateMiddleGroundRating = (reviewList: Review[]) => {
    if (reviewList.length == 0) {
      return 0;
    }

    const totalStars = reviewList.reduce(
      (sum, review) => sum + review.stars,
      0
    );

    const avgStars = totalStars / reviewList.length;

    return parseFloat(avgStars.toFixed(1));
  };

  return (
    <CardContext.Provider
      value={{
        posts: filtered,
        handleFavoriteRoute,
        handleFilterByTitle,
        addReview,
        calculateMiddleGroundRating,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextConstructor;
