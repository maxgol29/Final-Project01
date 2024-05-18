import React from 'react'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { validation } from '../pages/Login'

function Search() {
    return(
        <div className='w-1/2'>
            <div className='max-w-96'>
                <form id='searchForm'>
                    <input type='text' id='searcgInput' placeholder='Search...' className='p-3 outline-none bg-slate-300 rounded-s-3xl w-2/3 placeholder:text-slate-950 pl-6'></input>
                    <button type='submit' className='bg-indigo-600 rounded-e-3xl p-3 px-8 transition duration-500 ease-in-out hover:bg-purple-600'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "while",}}  />
                    </button>
                </form>
            </div>
        </div>
    )
}

function changeValidation() {
    return validation('Failed')
}

const Navbar = () => {
  return (
    <div className='static w-full bg-slate-100 h-28'>
        <div className='flex flex-row h-full items-center w-full gap-8 justify-around'>
            <h1 className=' text-[3rem] font-[800] mx-7'>
                <a href='/'>
                    MAXTECH
                </a>
            </h1>
            <Search />
            <div className='ml-auto max-w-108 flex-row flex items-center'>
                <div className='m-4'>
                    <FontAwesomeIcon icon={faUser} size='xl'/>
                </div>
                <div>
                    <span className='mr-7'>
                        {validation ? <span>Discount 20% for login! </span> : <span><a href='/logIn'>Log in</a></span>}
                    </span>
                </div>
                <div>
                    <span className='mr-7'>
                        {validation ? <button onChange={changeValidation}><a href='/login'>Exit</a></button> : <p></p>}
                    </span>
                </div>
                <div className='mr-7'>
                <FontAwesomeIcon icon={faHeart} size='xl'/>
                </div>
                <div className='mr-0'>
                <FontAwesomeIcon icon={faCartShopping} size='xl'/>
                </div>
                <span className='bg-black rounded-full size-4 text-white text-center mr-7 text-xs'>
                    0  
                </span>               
            </div>
        </div>
    </div>
  )
}

export default Navbar
