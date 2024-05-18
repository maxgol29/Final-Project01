import React from 'react'
import '../index.css'

const Banner2 = () => {
  return (
    <div className='bg-slate-200 relative'>
      <div className='mx-16 bg-white flex flex-row flex-nowrap gap-8'>
      <div className='ml-24 mt-12 w-[600px] items-center'>
            <div className='bg-red-700 text-white inline-block justify p-1 my-4'>
              <p>Today's Special</p>
            </div>
            <p className='text-2xl font-semibold'>
              Best Arial View in Town
            </p>
            <h2 className='text-8xl py-4'>
              <p className='text-purple-700'>30%</p> OFF
            </h2>
            <p className='text-2xl font-semibold py-4'>
              on professional camera drones
            </p>
            <h6 className='text-lg pb-8'>
              Limited quantities.<br />
              See product detail pages for availability.
            </h6>
            <button type='buttom' className='px-16 py-3 bg-purple-700 rounded-full text-white transition ease-in-out hover:bg-black duration-300'>
                <a href='/shopAll'>Shop</a>
            </button>
        </div>
        <div className='relative h-[600px] w-3/4 overflow-hidden'>
            <img className='w-full h-full object-cover banner2-clip-path  bg-cover' src='https://static.wixstatic.com/media/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png/v1/fill/w_2486,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.png' />
        </div>
      </div>
    </div>  
  )
}

export default Banner2 


//]