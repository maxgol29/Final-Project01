import React from 'react'
import '../index.css'

const sections = ['Shop All', 'Computers', 'Tablets', 'Drones & Cameras', 'Audio', 'Mobile', 'T.V & Home Cinema', 'Wearable Tech', 'Sale']
const pages = ['/shopAll', '/videoRegret', '/videoRegret', '/videoRegret', '/audio', '/mobile', '/videoRegret', '/videoRegret', '/videoRegret']

const CatalogNav = () => {
  return (
    <div className='sticky'>
        <div className='flex flex-row w-full h-[50px] bg-slate-300 items-center'>
            {sections.map((section, index) => (
                <div className='p-4' key={index}>
                    <span className='transition duration-150 hover:text-purple-500 ease-in-out'><a href={pages[index]}>{section}</a></span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CatalogNav
