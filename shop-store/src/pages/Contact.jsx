import React from 'react'
import {motion as m} from "framer-motion"
import {Footer, MainNavbar, NewsLetter, Banner3, GetInTouch} from '../components/components';


const Contact = () => {
  return (
    <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: 'easeInOut'}} >
        <MainNavbar />
        <GetInTouch />
        <NewsLetter />
        <Banner3 />       
        <Footer />
    </m.div>
  )
}

export default Contact


