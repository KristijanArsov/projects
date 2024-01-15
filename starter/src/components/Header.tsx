import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='d-flex justify-content-between m-3'>
     <Link to={'/'}>
      <h2 className=' d-inline p-0 mr-3' style={{cursor:`pointer`}}>Product</h2>
      </Link>
    <Link to={`/basket`}>
    <h2 className='d-inline p-0 mr-3' style={{cursor:`pointer`}}>Cart</h2>
    </Link>
    </nav>
  )
}

export default Header
