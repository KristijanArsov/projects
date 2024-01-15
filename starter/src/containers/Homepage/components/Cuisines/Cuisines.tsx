import React, { useContext } from 'react'
import CuisineBtn from './styled'
import { CardContext } from '../../../../context/cardContext'
import { Link } from 'react-router-dom'
import { CostumeTitle } from '../../../../themes/styled'


const Cuisines = () => {
const {handleFilterByTitle} = useContext(CardContext)
const cuisines = [`canteen`,`bukka`,`eatery`,`seafood`,`pizza`,`vegan`,`pasta`,`american`,`japanese`]
  return (
    <div className='flex container' style={{flexDirection:`column`, justifyContent:`center`,alignItems:`center`}}>
      <CostumeTitle>
        cuisines
      </CostumeTitle>
    <div>
       {
        cuisines.map((cuisine)=> {
            return <Link to={`/cuisineType/${cuisine}`} key={cuisine}>
            <CuisineBtn onClick={()=> {
              handleFilterByTitle(cuisine)
            }}>{cuisine}</CuisineBtn>
            </Link>
        })
       }
    </div>
    </div>
  )
}

export default Cuisines
