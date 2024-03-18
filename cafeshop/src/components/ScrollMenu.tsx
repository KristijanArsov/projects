import React, { useContext, useState } from "react";
import { DrinkContext } from "../context/DrinkContext";
import { DrinkType } from "../type/type";


interface ScrollElItem {
  title: string;
  icon?: string;
  isSelected: boolean;
  id:number
}

const ScrollMenu = () => {
  const { handleFilterDrinkByTitle } = useContext(DrinkContext);
  
  const [scrollEl, setScrollEl] = useState<ScrollElItem[]>([
    { title: `Show all`,icon: `fa-solid fa-bars`, isSelected: true, id:7 },
    { title: `Cocktail`, icon: `fa-solid fa-martini-glass-citrus`, isSelected: false, id:1 },
    { title: `Beer`, icon: `fa-solid fa-beer-mug-empty`, isSelected: false, id:2 },
    { title: `Ordinary Drink`, icon: `fa-solid fa-glass-water`, isSelected: false , id:3},
    { title: `Shot`, icon: `fa-solid fa-whiskey-glass`, isSelected: false, id:4 },
    { title: `Coffee \/ Tea`, icon: `fa-solid fa-mug-saucer`, isSelected: false, id:5 },
    { title: `Punch \/ Party Drink`, icon: `fa-solid fa-champagne-glasses`, isSelected: false , id:6},
  ]);

const handleSelected = (id:DrinkType[`idDrink`]) => {

  const selected = scrollEl.map((element)=> {
    if(element.id.toString() == id){
      return {
        ...element,
        isSelected: !element.isSelected
      }
    } return {
      ...element,
      isSelected: false,
    };
  })

  setScrollEl(selected)
}

  return (
    <div className="row pt-4">
      <div className="scrollmenu">
        {scrollEl.map((el) => {
          return (
            <div key={el.title} className="ml-3 menu-item">
              <button
                className={`border-none btn ${el.isSelected ? `bg-success` : ``}`}
                onClick={() => {
                  handleFilterDrinkByTitle(el.title);
                  handleSelected(el.id.toString())
                }}
              >
                <i className={`${el.icon} fa-2x`}></i>
              </button>
              <p className="small m-0">{el.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollMenu;
