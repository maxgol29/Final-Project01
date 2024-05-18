import React from 'react'
import '../index.css'
import truck from '../images/Icons/001-delivery-truck.png'
import box from '../images/Icons/002-box.png'
import price from '../images/Icons/003-low-price.png'
import service from '../images/Icons/004-24-hours-service.png'
import { icon } from '@fortawesome/fontawesome-svg-core'


const IconsAndQuality = () => {
    const icons = [truck, box, price, service]
    const text = [
      'Curb-side pickup',
      'Free shipping on \n orders over $50',
      'Low prices \n guaranteed',
      'Available to you 24/7'
    ]
    return(
      icons.map((icon, index) => (
          <div className='w-1/5 flex items-center gap-1 '>
              <img className='w-14' src={icon} />
              <p className='font-bold text-xl'>{text[index]}</p>
          </div>
      ))
    )
}

const Information = () => {
  return (
    <div className='bg-slate-200 w-full py-10'>
        <div className='flex flex-row mx-16 gap-16'>
            <div className='bg-rediphone w-1/2 h-[500px] object-cover overflow-hidden bg-cover bg-right-top text-slate-100'>
              <div className='p-16 text-nowrap'>
                <h5>Holiday Deals</h5>
                <h2>Up to <br />70% off</h2>
                <h5>Selected Smartphone Brands</h5>
                <button type='button'
                className=
                'text-s font-medium text-black bg-white border-solid my-4 rounded-full py-3 px-9 border-slate-50 border-2 transition duration-300 ease-in-out hover:bg-transparent' id='shop'>
                  <a href='/mobile'>Shop Now</a>
                  </button>
              </div>
            </div>
            <div className='bg-purpleHeadphone w-1/2 h-[500px] object-cover overflow-hidden bg-cover bg-right text-slate-100'>
              <div className='p-16 text-nowrap'>
                  <h5>Just In</h5>
                  <h2>Take Your<br /> Sound <br />Anywhere</h2>
                  <h5>Top Headphone Brands</h5>
                  <button type='button'
                  className=
                  'text-s font-medium text-black bg-white border-solid my-4 rounded-full py-3 px-9 border-slate-50 border-2 transition duration-300 ease-in-out hover:bg-transparent' id='shop'>
                    <a href='/audio'>Shop Now</a>
                  </button>
            </div>
            </div>
        </div>
        <div className='my-10'>
          <div className='bg-white h-[150px] flex flex-nowrap justify-around items-center mx-16'>
            <IconsAndQuality />
          </div>
        </div>
    </div>
  )
}

export default Information
