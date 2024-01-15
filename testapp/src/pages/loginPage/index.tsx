import React from 'react'
import LoginForm from '../../components/LoginForm'

const index = () => {
  return (
    <div className="row">
    <div className="container">
      <div className="row py-5">
        <div className="col-12 d-flex justify-content-center align-items-center text-light">
          <h1>Welcome To LOFI World</h1>
        </div>
      </div>
      <LoginForm/>
    </div>
  </div>
  )
}

export default index
