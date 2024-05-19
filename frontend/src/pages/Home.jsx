import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BestSellers from '../components/BestSellers'
import RegisterSection from '../components/RegisterSection'
import Contact from '../components/Contact'
import Authors from '../components/Authors'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <BestSellers />
        <RegisterSection />
        <Contact />
        <Authors />
        <Footer />
    </div>
  )
}

export default Home