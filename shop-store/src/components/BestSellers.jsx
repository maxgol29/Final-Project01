import React from 'react'
import { products } from '../data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'


const BestSellers = () => {
  const { headphones } = products;
  var settings = {
    slickNext: '',
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 6,
    initialSlide: 1,
    responsive: [          
      {
        breakpoint: 2120,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-full bg-slate-200'>
      <div className='bg-white p-10 mx-16'>
        <p className='m-16 text-center font-bold text-4xl'>Best Sellers</p>
        <div className='w-11/12 m-auto'>
          <div className=''>
          <Slider {...settings}>
            {headphones.map((headphone, index) => (
              <div className='border-stone-400 border-[1px] border-solid h-[350px] my-10 shadow-lg'>
                <div className='rounded-t-md flex justify-center items-center flex-nowrap bg-white'>
                  <img src={headphone.images[0][0]} alt='' className='h-50 w-50 max-w-52 max-h-52 p-10 transition ease-in-out delay-50 hover:scale-125 duration-500'/>
                </div>
                <div className='flex flex-col justify-start  gap-4 p-4 bg-white font-normal text-xl'>
                  <p>{headphone.label + ' ' + headphone.color[0].toLocaleUpperCase()}</p>
                  <p className='text-purple-700'>${headphone.price}.00</p>
                </div>
              </div>
            ))}
            </Slider>
           <div className='text-center'> 
            <button type='button' className='m-10 px-28 py-4 bg-violet-700 rounded-full text-white font-semibold text-xl transition ease-in-out hover:bg-purple-950 duration-300' ><a href='/shopAll'>View All</a></button>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSellers


/*

style={{'backgroundImage': `url(${headphone.images[0]})`}}

*/
