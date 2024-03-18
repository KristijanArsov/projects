import React, { useEffect } from "react";
import "../App.css";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

const query = useLocation()

useEffect(()=> {
gsap.registerPlugin(ScrollTrigger)

gsap.to(`.custom-navbar`, {scrollTrigger: {
  start: `top`,
  trigger:`.container-fluid`,
  toggleClass: {targets:`nav`, className:`nav-scroll`,}
}})

},[])

  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-dark">
      <Link className="navbar-brand" to="/">
        MusicApp
      </Link>
      <button
        className="navbar-toggler ml-auto "
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <Link className="nav-link " style={{color:query.pathname == `/` ? `#ff1493` : `#fff`}} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" style={{color:query.pathname == `/AboutPage` ? `#ff1493` : `#fff`}} to="/AboutPage">
              About
            </Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/ContactPage" style={{color:query.pathname == `/ContactPage` ? `#ff1493` : `#fff`}}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
