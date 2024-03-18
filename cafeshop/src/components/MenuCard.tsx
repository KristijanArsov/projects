import React from 'react'
import { DrinkType } from '../type/type'

const MenuCard:React.FC<DrinkType> = ({strCategory,strDrinkThumb}) => {
  return (
    <div className='col-md-3 col-12 mb-3'>
      <div className="card p-3" style={{borderRadius:`10px`,border:`none`,boxShadow:`0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}>
        <img src={strDrinkThumb} alt="" className='w-100' style={{borderRadius:`10px`}}/>
        <p className='font-weight-bold py-3 m-0'>Item: {strCategory}</p>
        <p className='small'>Ingredients: /</p>
        <p className='small'>Price: /</p>
      </div>
    </div>
  )
}

export default MenuCard
