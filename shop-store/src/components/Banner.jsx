import React from 'react'
import '../index.css'

const Banner = () => {
  return (
    <div className='bg-slate-200 relative'>
        <div className=' mx-16 z-20 absolute flex justify-center items-center w-40 h-40 bg-red-600 -rotate-45 rounded-full text-white text-xl font-semibold'>
            <span>Best Price</span>
        </div>
      <div className='mx-16 bg-white flex flex-row justify-between items-center'>
        <div className='relative w-5/6 h-[600px] overflow-hidden'>
            <img className='w-full h-full object-cover banner-clip-path bg-right-bottom' src='https://static.wixstatic.com/media/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png/v1/fill/w_2495,h_900,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.png' />
        </div>
        <div className='p-28'>
            <p className='text-2xl font-semibold'>
                Save up to
            </p>
            <h2 className='text-8xl py-4'>
                $150
            </h2>
            <p className='text-2xl font-semibold py-4'>
                on selected laptop <br /> & tablets brands
            </p>
            <h6 className='text-lg pb-8'>
                Term and conditions apply
            </h6>
            <button type='buttom' className='px-16 py-3 bg-purple-800 rounded-full text-white transition ease-in-out hover:bg-purple-950 duration-300'>
                <a href='/shopAll'>Shop</a>
            </button>
            </div>
      </div>
    </div>
  )
}

export default Banner
