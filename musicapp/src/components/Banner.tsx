import React, { useEffect } from 'react'
import "../App.css";
import gsap from "gsap";
import { Link } from 'react-router-dom';




const Banner:React.FC = () => {
useEffect(()=> {
  gsap.registerPlugin(ScrollTrigger)


  gsap.to('.gsap-text', {
    x: 15,
    duration: 2,
  });
  
},[])


  return (
    <div className='row'>
    <div className="col-md-12 bg-img">
    <img src="../img/splat.png" alt="" className=' splat' />
    <h1 className='custom-absolute text-start font-weight-bold gsap-text'>Elevate <span style={{color:`#ff1493`}}>Your Senses</span> with <br /> Captivating <span style={{color:`#ff1493`}}>Melodies</span></h1>
    </div>
    </div>
  )
}

export default Banner
