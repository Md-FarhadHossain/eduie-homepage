import React from 'react'
import Footer from '../../../components/Footer/Footer'
import Hero from '../Hero/Hero'
import Newsletter from '../Newsletter/Newsletter'
import Review from '../Review/Review'
import Services from '../Services/Services'
import ShowServices from '../ShowServices/ShowServices'
import Team from '../Team/Team'

const Home = () => {
  return (
    <div>
        <Hero />
        <Newsletter />
        <Services />
        <ShowServices />
        <Team />
        <Review />
        <Footer />
    </div>
  )
}

export default Home