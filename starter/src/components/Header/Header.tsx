import React from 'react'
import { NavLink } from 'react-router-dom'
import CostumeNavBar from './styled'

const Header = () => {
  return (
    <CostumeNavBar className='container flex'>
      <NavLink to='/' style={{textDecoration:`none`, color:`black`,fontWeight:`bold`}}>
        restaurant
      </NavLink>
      <NavLink to='/favorites'>
      <i className='fas fa-heart fa-2x' style={{color:`red`, textDecoration:`none`}}></i>
      </NavLink>
    </CostumeNavBar>
  )
}

export default Header
