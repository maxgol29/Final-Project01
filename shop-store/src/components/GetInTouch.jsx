import React from 'react'

const GetInTouch = () => {
  return (
    <div className='w-full h-[1000px] text-center'>
      <h1 className='text-6xl font-semibold m-16'>Get in Touch</h1>
      <hr className='border-stone-300 border-[1px] w-10/12 m-auto flex-nowrap'/>
      <div className='flex flex-row flex-nowrap justify-evenly w-10/12 m-auto'>
        <div className='mt-32 w-1/2'>
            <div className='text-start mb-56'>
                <h3 className='font-semibold pb-10 text-2xl'>Opening Hours</h3>
                <ul>
                    <li className='pb-3 text-lg'>Mon - Fri: 8am - 8pm</li>
                    <li className='pb-3 text-lg'>Saturday: 9am - 7pm</li>
                    <li>Sunday: 9am - 8pm</li>
                </ul>
            </div>
            <div className='text-start'>
                <h3 className='font-semibold pb-10 text-2xl'>Store Location</h3>
                <ul className=''>
                    <li className='pb-3 text-lg'>Sunday: 9am - 8pm</li>
                    <li className='pb-3 text-lg'>San Francisco, CA 94158</li>
                    <li className='pb-3 text-lg'>info@mysite.com</li>
                    <li>123-456-7890</li>
                </ul>
            </div>
        </div>
        <div className='w-[500px]'>
            <h3 className='mt-32 text-2xl font-semibold text-left'>We're here to help!</h3>
            <p className='text-left my-16'>Fill out the form with any query on your mind and we'll get back to you as soon as possible</p>
            <div className='flex flex-row flex-wrap w-[500px]'>
                <div className='w-5/12 m-4 text-left border-b-2 border-y-zinc-500'>
                    <p className='py-4'>First Name</p>
                    <input type='text' className='border-none outline-none p-5'/>
                </div>
                <div className='w-5/12 m-4 text-left border-b-2 border-y-zinc-500'>
                    <p className='py-4'>Last Name</p>
                    <input type='text' className='border-none outline-none p-5'/>
                </div>
                <div className='w-5/12 m-4 text-left border-b-2 border-y-zinc-500'>
                    <p className='py-4'>Email *</p>
                    <input type='text' className='border-none outline-none p-5'/>
                </div>
                <div className='w-5/12 m-4 text-left border-b-2 border-y-zinc-500'>
                    <p className='py-4'>Subject</p>
                    <input type='text' className='border-none outline-none p-5'/>
                </div>
                <div className='w-full text-left m-4 border-b-2 border-y-zinc-500' >
                    <p className='py-4'>Subject</p>
                    <input type='text' className='w-full border-none outline-none p-5'/>
                </div>
                <div className='w-5/12 mx-4 my-9'>
                    <button className='bg-purple-600 w-full p-5 rounded-full text-white text-lg transition duration-300 hover:bg-purple-950 ease-in-out'>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
