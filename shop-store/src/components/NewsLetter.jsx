import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NewsLetter = () => {
  return (
    <div className='m-16 bg-violet-700 h-[260px] text-center text-white'>
        <div className=''>
            <h1 className='font-bold text-4xl p-4 '>Newsletter</h1>
            <span className=''>Sign up to receive updates on new arrivals and special offers</span>
        </div>
        <div className='p-6'>
            <div className='w-full'>
            <div className='w-1/2 m-auto overflow text-left'>
                <p className='m-3'>
                    Email *
                </p>
                <form id='searchForm' className='relative transition duration-500 hover:scale-105 ease-in-out'>
                    <input type='text' id='searcgInput' placeholder='Your Email Here' 
                        className=' absolute p-3 bg-white text-black rounded-full m-auto w-full placeholder:text-slate-950 pl-6 outline-none'></input>
                    <button type='submit' className='right-0 absolute  bg-black rounded-3xl w-[200px] p-3 px-8 duration-500 transition hover:scale-105 ease-in-out'>
                        <a href="/">Subscribe</a>
                    </button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NewsLetter
