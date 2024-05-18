import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import visa from '../images/Other/icons8-visa-96.png'
import jcb from '../images/Other/icons8-jcb-96.png'
import paypal from '../images/Other/icons8-paypal-an-online-payments-system-operating-worldwide-96.png'
import unionpay from '../images/Other/icons8-unionpay-96.png'
import express from '../images/Other/icons8-american-express-squared-96.png'
import mastercard from '../images/Other/icons8-mastercard-96.png'
import discover from '../images/Other/icons8-discover-card-96.png'

const Footer = () => {
    const emailAddress = 'maxgol029@gmail.com';
  return (
    <div>
    <div className='bg-white w-full py-10'>
        <div className='container mx-auto flex flex-wrap justify-around'>
            <div className='w-1/4 px-4 mb-8'>
                <h3 className='font-semibold text-xl mb-4'>Store Location</h3>
                <p className='leading-10 block'>500 Terry Francine Street</p>
                <p className='leading-10 block'>San Francisco, CA 94158</p>
                <p className='leading-10 block pointer-events-auto'>maxgol029@gmail.com</p>
                <p className='leading-10 block'>
                    <a href='tel:+1-210-388-5318' className='hover:underline hover:text-purple-600'>210-388-5318</a>  
                </p>
                <div className='flex my-4'>
                    <FontAwesomeIcon icon={faFacebook} style={{marginRight: '10px', height: '24px'}}/>
                    <FontAwesomeIcon icon={faInstagram} style={{marginInline: '10px', height: '24px'}}/>
                    <FontAwesomeIcon icon={faTwitter} style={{marginInline: '10px', height: '24px'}}/>
                    <FontAwesomeIcon icon={faYoutube} style={{marginInline: '10px', height: '24px'}}/>
                </div>
            </div>
            <div className='w-1/4 px-4 mb-8'>
                <h3 className='font-semibold text-xl mb-4'>Shop</h3>
                <ul>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/shopAll'>Shop All</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/videoRegret'>Computers</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/videoRegret'>Tablets</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/videoRegret'>Drones & Cameras</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/audio'>Audio</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/mobile'>Mobile</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/videoRegret'>T.V & Home Cinema</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/videoRegret'>Wearable Tech</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/videoRegret'>Sale</a></li>
                </ul>
            </div>
            <div className='w-1/4 px-4 mb-8'>
                <h3 className='font-semibold text-xl mb-4'>Customer Support</h3>
                <ul>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/contact'>Contact Us</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/helpCenter'>Help Center</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/about'>About Us</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/helpCenter'>Careers</a></li>
                </ul>
            </div>
            <div className='w-1/4 px-4 mb-8'>
                <h3 className='font-semibold text-xl mb-4'>Policy</h3>
                <ul>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/videoRegret'>Shipping & Returns</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/about'>Terms & Conditions</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/videoRegret'>Payment Methods</a></li>
                    <li className='leading-10 block hover:text-purple-600 hover:underline'><a href='/helpCenter'>FAQ</a></li>
                </ul>
            </div>
        </div>
        <div className='text-center'>
            <hr className='border-stone-300 border-[1px] w-10/12 m-auto flex-nowrap'/>
            <p className='m-16'>We accept the following methods</p>
            <div className='flex flex-row m-auto justify-center gap-24'>
                <img className='w-16 h-16' src={visa}/>
                <img className='w-16 h-16' src={mastercard}/>
                <img className='w-16 h-16' src={discover}/>
                <img className='w-16 h-16' src={unionpay}/>
                <img className='w-16 h-16' src={express}/>
                <img className='w-16 h-16' src={jcb}/>
                <img className='w-16 h-16' src={paypal}/>
            </div>
        </div>
    </div>
    <div className='bg-stone-400 w-full h-[30px] text-center'>
        <p className='text-black text-sm'>&copy; MAXTECH by Maksym Holubnychyi, San Antonio</p>
    </div>
    </div>
  )
}

export default Footer
