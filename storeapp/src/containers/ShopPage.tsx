import React from 'react'
import BreadCrumbs from '../comonents/BreadCrumbs'
import ProductList from '../comonents/ProductList'
import Shopmenu from '../comonents/Shopmenu'

const ShopPage = () => {
  return (
    <div className='container-fluid '>
      <BreadCrumbs title='Shop'/>
      <Shopmenu/>
      <ProductList/>
    </div>
  )
}

export default ShopPage
