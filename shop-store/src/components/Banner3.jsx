import React from 'react'


const Banner3 = () => {
    const image = 'https://static.wixstatic.com/media/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg/v1/fill/w_1745,h_668,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_de5cbbefa9104fc1a1604ea146ea523a~mv2.jpg';

  return (
    <div>
        <div className='flex flex-row justify-between gap-2'>
            <div className='w-1/2 bg-black text-center text-white flex justify-center flex-col'>
                <div className='flex flex-col justify-center flex-nowrap w-8/12 m-auto box-border text-left items-left'>
                    <h2 className='mt-20 mb-10 text-4xl'>Need Help? <br />
                    Check Out Our Help Center
                    </h2>
                    <p className='mb-10'>Lorem ipsum dolor sit amet consectetur.</p>
                    <button type='buttom' className=' w-52 h-16 bg-purple-700 rounded-full text-white transition ease-in-out hover:bg-white hover:text-black duration-500'>
                        <a href='/helpCenter'>Go to Help Center</a>
                    </button>
                </div>
            </div>
            <div className='relative h-[600px] w-3/4 bg-black'>
                <img className='w-full h-full object-cover banner3-clip-path bg-cover overflow-hidden' src={image} />
            </div>
        </div>
    </div>
  )
}

export default Banner3
