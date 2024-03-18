import React, { createContext, useEffect, useState } from "react";
import { DrinkType, DrinkType2 } from "../type/type";

interface DrinkContextType {
  drinksData: DrinkType2;
  handleFilterDrinkByTitle: (title: string) => void;
  handleFilterDrinkByInputSearch: (title: string) => void;
}

export const DrinkContext = createContext<DrinkContextType>({
  drinksData: { drinks: [] },
  handleFilterDrinkByTitle: () => {},
  handleFilterDrinkByInputSearch: () => {},
});

interface Props {
  children: React.ReactNode;
}

const DrinkContextConstructor: React.FC<Props> = ({ children }) => {
  const [drinksData, setDrinksData] = useState<DrinkType2>({ drinks: [] });
  const [filterDrink, setFilterDrink] = useState<DrinkType2>(drinksData);

  useEffect(() => {
    setFilterDrink(drinksData);
  }, [drinksData]);


  useEffect(()=> {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`)
    .then((res) => res.json())
    .then((data: DrinkType2) => {
      setDrinksData(data);
    });
  },[])

  
  const handleFilterDrinkByTitle = (title: DrinkType[`strCategory`]) => {
    const filteredDrink = drinksData.drinks.filter(drink => {
      if(title == `Show all`){
        return true
      }else if (drink.strCategory.toLowerCase() == title.toLowerCase()){
        return true
      }return false
    })
    setFilterDrink({drinks:filteredDrink})
  };


  const handleFilterDrinkByInputSearch = (title:DrinkType[`strCategory`]) => {
    const filteredDrink = drinksData.drinks.filter((drink)=> drink.strCategory.toLowerCase().includes(title.toLowerCase()) )
    setFilterDrink({drinks:filteredDrink})
  }

  return (
    <DrinkContext.Provider
      value={{ drinksData: filterDrink, handleFilterDrinkByTitle,handleFilterDrinkByInputSearch }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export default DrinkContextConstructor;
