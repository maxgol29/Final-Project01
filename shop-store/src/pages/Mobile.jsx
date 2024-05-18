import React from 'react'
import {motion as m} from "framer-motion"
import { MainNavbar, Footer, Banner3, MainProducts } from '../components/components'
import { products } from '../data'

function Filter() {

    return(
        <div className='mx-8'>
            <ul>
                <li className='w-10/12 m-auto my-6 text-2xl'>Browse by</li>
                <hr class="border-stone-500 border-[1px] w-10/12 m-auto"></hr>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='/shopAll'>All Products</a></li>  
                <li className='w-10/12 m-auto my-6 text-base hover:underline'>Best Sellers</li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='#'>Computers</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='#'>Drones & Cameras</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='/audio'>Headphones</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='#'>Home Page Best Sellers</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='#'>Home Page Sale</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline font-medium '><a href='#'>Mobile</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='#'>Sale</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='#'>Speakers</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='#'>Tablets</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='#'>TV & Home Cinema</a></li>
                <li className='w-10/12 m-auto my-6 text-base hover:underline'><a href='#'>Wearable Tech</a></li>
            </ul>
            <ul>
            <li className='w-10/12 m-auto mt-16 mb-6 text-2xl'>Filter by</li>
            <hr className="border-stone-500 border-[1px] w-10/12 m-auto"></hr>
            <li>

            </li>
            </ul>
        </div>
    )
}

function MainPart() {
    const {phones} = products

    return(
        <div className='w-full flex flex-nowrap justify-between py-40 bg-gray-300'>
            <div className='w-[500px]'>
                <Filter />
            </div>
                <MainProducts sections={[phones]} name={'Phones'}/>
        </div>
    )
}

const Mobile = () => {
  return (
    <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: 'easeInOut'}} >
        <MainNavbar />
        <MainPart/>
        <Banner3 />
        <Footer />
    </m.div>
  )
}

export default Mobile
