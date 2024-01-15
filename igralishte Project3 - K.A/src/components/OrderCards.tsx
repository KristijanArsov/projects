import { ProductType } from '@/type/type'
import React from 'react'


const OrderCards:React.FC<ProductType> = ({id,img,name,price}) => {
  return (
    <div
    className="col-12 mb-3 d-flex justify-content-center"
    key={id}
  >
    <div
      className=" border-0 w-100"
      style={{ height: "474px" }}
    >
      <img
        className="card-img-top w-100"
        src={`${img}`}
        alt="Card image cap"
        style={{ height: `400px` }}
      />
      <div className="card-body p-0">
        <p
          className="card-title"
          style={{ fontSize: `13px` }}
        >
          {name}
        </p>
        <span className="card-text">
          {price} ден.
        </span>
      </div>
    </div>
  </div>
  )
}

export default OrderCards
