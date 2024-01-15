import React, {
  ChangeEvent,
  useContext,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { RestaurantType, Review } from "../../interfaces/type";
import { CardContext } from "../../context/cardContext";
import CostumeInput from "./styled";
import { Button, CostumeCard, CostumeTitle } from "../../themes/styled";

const RestaurantDetail = () => {
  const { posts, addReview, calculateMiddleGroundRating } =
    useContext(CardContext);
  const { id } = useParams();
  const nameInput = useRef<HTMLInputElement>(null);
  const commentInput = useRef<HTMLInputElement>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10); 
    setSliderValue(value);
  };

  let findRestaurant: RestaurantType | undefined = undefined;

  if (id) {
    findRestaurant = posts.find((post) => post.id == id);
  }
  if (!findRestaurant) {
    return <div>Error 404 Restaurant Not Found</div>;
  }

  const avgScore = calculateMiddleGroundRating(findRestaurant.reviewsList);

  return (
    <div className="container">
      <CostumeCard>
        <picture>
          <img
            src={findRestaurant.image}
            alt=""
            style={{ borderRadius: `10px 10px 0 0` }}
          />
        </picture>
        <div style={{ padding: `10px` }}>
          <p>
            Rating - {avgScore} <br />
            <span style={{ fontSize: 12 }}>
              based on {findRestaurant.reviews} reviews
            </span>
          </p>
          <p>{findRestaurant.phone}</p>
          <p>{findRestaurant.email}</p>
          <p>{findRestaurant.address}</p>
          {findRestaurant.parkinglot == true ? (
            <p>We have a parking lot waiting for you </p>
          ) : null}
        </div>
      </CostumeCard>

      <div>
        <CostumeTitle>reviews</CostumeTitle>

        {findRestaurant.reviewsList.map((review) => {
          return (
            <CostumeCard key={review.id} style={{ marginBottom: `10px` }}>
              <div style={{ padding: `10px` }}>
                <p>
                  <span style={{ fontWeight: `bold` }}>Author:</span>{" "}
                  {review.author}
                </p>
                <p>
                  <span style={{ fontWeight: `bold` }}>Message:</span>{" "}
                  {review.comment}
                </p>
                <p>
                  <span style={{ fontWeight: `bold` }}>Stars:</span>{" "}
                  {review.stars}
                </p>
              </div>
            </CostumeCard>
          );
        })}
      </div>

      <div>
        <CostumeTitle>review form</CostumeTitle>
        <form
          className="flex"
          style={{ justifyContent: `center`, flexDirection: `column` }}
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const name = nameInput.current?.value || "";
            const comment = commentInput.current?.value || "";

            if (!name && !comment && !sliderValue) {
              alert(
                "Please enter both your name and a comment to submit a review."
              );
              return;
            }

            const newReview: Review = {
              id: new Date().valueOf(),
              author: name,
              comment: comment,
              stars: sliderValue,
            };

            if (findRestaurant && id) {
              const updatedRestaurant: RestaurantType = {
                ...findRestaurant,
                reviews: (findRestaurant.reviews || 0) + 1, //
                reviewsList: [newReview, ...(findRestaurant.reviewsList || [])],
              };
              addReview(id, updatedRestaurant);
              
            }

            if (nameInput.current) {
              nameInput.current.value = "";
            }
            if (commentInput.current) {
              commentInput.current.value = "";
            }
            if(sliderValue){
              setSliderValue(0)
            }
          }}
        >
          <label htmlFor="name" style={{ marginBottom: `5px` }}>
            Name
          </label>
          <CostumeInput type="text" id="name" ref={nameInput} />

          <label htmlFor="comment" style={{ marginBottom: `5px` }}>
            Comment
          </label>
          <CostumeInput type="text" id="comment" ref={commentInput} />

          <input
            value={sliderValue}
            type="range"
            min="0"
            max="5"
            onChange={handleSliderChange}
          />
          <Button type="submit">Leave a review</Button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantDetail;
