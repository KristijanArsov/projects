import React, { useContext, useRef, useState } from "react";
import { StoreContext } from "../context/StoreContext";

interface BtnFilterType {
  id: number;
  title: string;
  isSelected: boolean;
}

const Shopmenu = () => {
  const { handleFilterByCategory, handleFilterByTitle } =
    useContext(StoreContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [elArray, setEl] = useState<BtnFilterType[]>([
    { id: 1, title: "Show All", isSelected: true },
    { id: 2, title: "men's clothing", isSelected: false },
    { id: 3, title: "women's clothing", isSelected: false },
    { id: 4, title: "Electronics", isSelected: false },
    { id: 5, title: "Jewelery", isSelected: false },
  ]);

  const handleSelected = (id: number) => {
    const mapArray = elArray.map((el) => {
      if (el.id == id) {
        return {
          ...el,
          isSelected: true,
        };
      } else {
        return {
          ...el,
          isSelected: false,
        };
      }
    });
    setEl(mapArray);
  };

  return (
    <div className="row py-3 animate__animated animate__fadeInLeft">
      <div className="col-12 d-flex justify-content-center">
        <div className="scrollmenu">
        {elArray.map((el) => {
          return (
            <button
              className={`btn btn-outline-dark me-3 ${
                el.isSelected ? `bg-success text-light border-0` : ``
              }`}
              key={el.id}
              onClick={() => {
                handleFilterByCategory(el.title);
                handleSelected(el.id);
              }}
            >
              {el.title}
            </button>
          );
        })}
        </div>
       
      </div>
      <div className="col-12 d-flex justify-content-center mt-4">
        <input
          ref={inputRef}
          type="text"
          className="w-50 ps-3"
          placeholder="Search Product..."
          style={{ borderRadius: `30px`, border: `0.8px solid #35374b` }}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === `Enter`) {
              if (inputRef.current) {
                handleFilterByTitle(inputRef.current.value);
              }
              if (inputRef.current) {
                inputRef.current.value = ``;
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default Shopmenu;
