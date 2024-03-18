import React from 'react'

interface Props {
title: string
}

const BreadCrumbs:React.FC<Props> = ({title}) => {
  return (
    <div className='row'>
      <div className="col-12 d-flex justify-content-center align-items-center text-center breadcrumbs-bg">
        <h1 className='fw-bold text-light animate__animated animate__fadeInLeft' style={{fontSize:`100px`}}>{title}</h1>
      </div>
    </div>
  )
}

export default BreadCrumbs
