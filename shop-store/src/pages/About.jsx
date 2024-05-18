import { motion as m } from 'framer-motion'
import {MainNavbar, AboutSection, Banner3, Footer, CareerForm} from '../components/components';


const About = () => {
  return (
    <m.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}}
        transition={{duration: 1, ease: 'easeInOut'}}>
          <MainNavbar />
          <AboutSection />
          <CareerForm />
          <Banner3 />
          <Footer />
    </m.div>
  )
}

export default About



