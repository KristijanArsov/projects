import React, { useContext } from 'react'
import ScrollMenu from './ScrollMenu';
import MenuCard from './MenuCard';
import { DrinkContext } from '../context/DrinkContext';

const FullMenu = () => {
const {drinksData} = useContext(DrinkContext)  

  return (
    <>
    <ScrollMenu/>
     <div className='row py-4'>
      {drinksData.drinks.length > 0 ? ( drinksData.drinks.map((drink)=> {
        return <MenuCard key={drink.idDrink} {...drink}/>
      })) : (<p className='ml-3'>Item Not Found...</p>)
     }
      
    </div>
    </>
   
  )
}

export default FullMenu
