/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'
import Fashion from '../Components/Fashion'
import Design from '../Components/Design'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <Fashion />
      <Design />
      <NewsletterBox />
    </div>
  )
}

export default Home