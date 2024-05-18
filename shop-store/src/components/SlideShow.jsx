import React, { useState, useEffect } from 'react';
import iphone from '../images/SlideShow/IphoneSlide.jpg'
import watch from '../images/SlideShow/AppleWatchSlide.jpg'
import mac from '../images/SlideShow/MacBookSlide.jpg'
import '../index.css'

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="w-full h-[565px] bg-cover bg-center transition-all duration-500  linear" 
    style={{
      'backgroundImage': `url(${images[currentImageIndex]})`}}
    >
      <div className='py-16 px-32 w-[750px] h-full backdrop-blur-lg'>
        <h3 className='inline-block bg-red-700 text-white px-1 text-lg'>Best Prices</h3>
        <h2 className='font-semibold'>Incredible Prices on All Your Favorite Items</h2>
        <h3 className='my-6 text-xl font-light'>Get more for lesson selected brands</h3>
        <div className=''> 
            <button type='button' className='px-28 py-4 bg-violet-700 rounded-full text-white font-semibold text-xl transition ease-in-out hover:bg-purple-950 duration-300'><a href='/shopAll'>View All</a></button>
           </div>
      </div>
    </div>
  );
};


const SlideShow = () => {
  const images = [
    iphone,
    mac,
    watch
  ];

  return (
    <>
      <div className='transition duration-200 ease-in-out'>
        <ImageSlider images={images}/>
      </div>
    </>
  );
};


export default SlideShow;
