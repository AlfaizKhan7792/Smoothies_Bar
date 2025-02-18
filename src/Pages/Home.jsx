import React, { useEffect } from 'react'
import Hero from './Hero'
import FeaturedSmothies from './FeaturedSmoothies'
import WhyChooseUs from './WyChooseUs'
import PopularMenu from './PopularMenu'
import About from './About'
import Testimonials from './Testimonials'
import VisitUsSection from "./VisitUsSection"

const Home = () => {

   

  return (
    <div data-aos="fade-up">
       <Hero />
    <FeaturedSmothies />
    <WhyChooseUs />
    <PopularMenu />
    <About />
    <Testimonials />
    <VisitUsSection /> 
    </div>
  )
}

export default Home
