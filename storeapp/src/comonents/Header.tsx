import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  searchHandle:React.Dispatch<React.SetStateAction<boolean>>

}

const Header:React.FC<Props> = ({searchHandle}) => {
  const location = useLocation()


  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{background:`#35374B`}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">General Store</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname == `/` ? `text-warning fw-bold`: ``}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname == `/ShopPage` ? `text-warning fw-bold`: ``}`} to="/ShopPage">Store</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname == `/BlogPage` ? `text-warning fw-bold`: ``}`} to="/BlogPage">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname == `/ContactPage` ? `text-warning fw-bold`: ``}`} to="/ContactPage">Contact</Link>
          </li>
        </ul>
        <i className="fa-solid fa-magnifying-glass text-light" onClick={()=> {
          searchHandle(true)
        }}></i>
      </div>
    </div>
  </nav>
  )
}

export default Header
