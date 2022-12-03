import React from 'react'
import Hero from '../Hero/Hero'
import Newsletter from '../Newsletter/Newsletter'
import Services from '../Services/Services'
import ShowServices from '../ShowServices/ShowServices'

const Home = () => {
  return (
    <div>
        <Hero />
        <Newsletter />
        <Services />
        <ShowServices />
    </div>
  )
}

export default Home