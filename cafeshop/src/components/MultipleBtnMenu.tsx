import React from 'react'
import { Link } from 'react-router-dom'

const MultipleBtnMenu = () => {
  return (
    <div className='col-12 pt-3'>
      <div className="card multiple-menu-home-bg d-flex justify-content-center align-items-center">
        <Link className='btn btn-outline-light m-3 text-light w-50' style={{borderRadius:`50px`,}} to={`/FullMenu`}>See Full Menu</Link>
      </div>
    </div>
  )
}

export default MultipleBtnMenu
