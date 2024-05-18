import React, { useState, useEffect } from 'react'
import AboveNavbar from './AboveNavbar'
import CatalogNav from './CatalogNav'
import Navbar from './Navbar'
import '../index.css'


const MainNavbar = () => {
  const [fix, setFix] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 400;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);




  return (
    <>
      <AboveNavbar />
      <Navbar />
      <CatalogNav />
    </>
  )
}

export default MainNavbar

//<nav className={`z-20 fixed -top-full left-0 w-full transition duration-600 ease-in-out ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>