import React from 'react'
import Banner from '../components/Banner'
import HeroSection from '../components/HeroSection'
import FeaturedMusic from '../components/FeaturedMusic'

const HomePage = () => {
  return (
    <div className='container-fluid'>
      <Banner />
      <HeroSection/>
      <FeaturedMusic/>
    </div>
  )
}

export default HomePage
