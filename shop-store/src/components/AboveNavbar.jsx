import '../index.css'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboveNavbar = () => {
  return (
    <div className='static flex mt-0 w-full bg-stone-950 h-[50px] font-light items-stretch text-lg'>
        <div className='w-[50%] my-auto mx-7'>
            <span className='mx-4'>
                <FontAwesomeIcon icon={faTruck} style={{color: "#ffffff",}} />
            </span>
            <span className='text-gray-100 text-center ml-0 my-auto'> 
              Free Shipping for orders over $50
            </span>
        </div>
          <div className='w-[50%] m-auto text-slate-100 space-x-5 text-right mx-7'>
            <span className=''>
              <a href='/about' className='underline decoration-1'>
                About
              </a>
            </span>
            <span>
            <a href='/contact' className='underline decoration-1'>
                Contact
              </a>              
            </span>
            <span>
            <a href='/helpCenter' className='underline decoration-1'>
                Help Center
              </a>              
            </span>
            <span>
              Call Us
              <a href='tel:+1-210-388-5318' className='underline decoration-1 ml-1 hover:text-blue-300'>
              210-388-5318   
                </a>          
            </span>
            <span>

            </span>
          </div>
        </div>
  )
}

export default AboveNavbar
