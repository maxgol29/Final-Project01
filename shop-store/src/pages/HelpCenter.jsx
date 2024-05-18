import React from 'react'
import {motion as m} from "framer-motion"
import {Banner, Banner3, Footer, MainNavbar, MaxTechHelp} from '../components/components'

const HelpCenter = () => {
  return (
    <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: 'easeInOut'}} >
        <MainNavbar />
        <MaxTechHelp />
        <Banner3 />
        <Footer />
    </m.div>
  )
}

export default HelpCenter
