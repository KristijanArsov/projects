import React, { useContext } from 'react'
import { CardContext } from '../../context/cardContext'
import RestaurantCard from '../../components/Cards/RestaurantCard'

const Favorites = () => {
  const {posts} = useContext(CardContext)
  return (
    <div className='container'>
      {
        posts.map((post)=> {
          if(post.isFavorite){
            return <RestaurantCard key={post.id} {...post}/>
          }
        })
      }
    </div>
  )
}

export default Favorites
