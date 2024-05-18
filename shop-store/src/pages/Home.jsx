import React from 'react'
import {MainNavbar, SlideShow, Information, BestSellers, ShopByCategory, Banner, Sale, Banner2, Brands, NewsLetter, Banner3, Footer} from '../components/components'
import {motion as m} from "framer-motion"

const Home = () => {
  return (
    <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: 'easeInOut'}} >
      <MainNavbar />
      <SlideShow />
      <Information />
      <BestSellers />
      <ShopByCategory />
      <Banner />
      <Sale />
      <Banner2 />
      <Brands />
      <NewsLetter />
      <Banner3 />
      <Footer />
    </m.div>
  )
}

export default Home
