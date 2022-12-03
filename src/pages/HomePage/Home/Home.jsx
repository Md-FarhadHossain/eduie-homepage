import React from 'react'
import Hero from '../Hero/Hero'
import Newsletter from '../Newsletter/Newsletter'
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
    </div>
  )
}

export default Home