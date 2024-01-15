import React from 'react'
import SurpriseRestaurant from './components/SurpriseRestaurant/SurpriseRestaurant'
import PopularRestaurants from './components/PopularRestaurants/PopularRestaurants'
import Cuisines from './components/Cuisines/Cuisines'
import AllRestaurants from './components/AllRestaurants/AllRestaurants'

const Homepage = () => {
  return (
    <div className=''>
      <SurpriseRestaurant/>
      <PopularRestaurants/>
      <Cuisines/>
      <AllRestaurants/>
    </div>
  )
}

export default Homepage
