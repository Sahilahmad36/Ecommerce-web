import React from 'react'
import { assets } from '../assets/assets.js'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative px-2" style={{
        marginTop:"40px"
    }}>
        <div 
          className="absolute inset-0 z-0 bg-cover mt-8 bg-center"
          style={{
            backgroundImage: `url(${"https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg"})`, 
            filter: 'brightness(30%)',
            zIndex: -1
          }}
        ></div>

        <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-8 sm:gap-14 py-10 sm:py-20 text-sm w-full">
            <div className="flex flex-col items-start sm:items-start sm:ml-6 sm:col-span-1">
                <a href='/'>
                <img src={assets.logo} className="mb-5 w-32 sm:w-44 ml-2" alt="logo" />
                </a>
                <p className='text-white text-md w-full sm:w-2/3 px-2'>
                At Mah and Me, we bring you the latest trends in fashion with a focus on comfort, quality, and style. Our curated collection of clothing is designed to suit every occasion, ensuring you always feel confident and stylish. We are committed to providing exceptional customer service and delivering high-quality garments straight to your door. 
                </p>

                <div className="flex flex-col items-start sm:items-start sm:ml-6 sm:col-span-1 mt-10">
                    <p className="text-white text-md mb-4 ml-2">123 Main Street, City, Country</p>

                    <div className="flex gap-4 ml-2">
               <a href="https://www.facebook.com/people/Mah-Me/61571406191583/" target="_blank" rel="noopener noreferrer">
                 <FaFacebook className="text-white text-3xl hover:text-blue-700 transform transition-all duration-300 hover:scale-125" />
               </a>
               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="text-white text-3xl hover:text-red-700 transform transition-all duration-300 hover:scale-125" />
                 </a>
              <a href="https://www.instagram.com/mahandme10" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-3xl hover:text-pink-600 transform transition-all duration-300 hover:scale-125" />
               </a>
           </div>

                </div>
            </div>

            <div className="sm:col-span-1 ml-4 sm:ml-0">
                <p className='text-2xl font-medium mb-5 text-white'>COMPANY</p>
                <ul className="flex flex-col gap-1 text-white">
  <a href="/">
    <li className="transition-transform transform hover:scale-105 hover:text-yellow-400">Home</li>
  </a>
  <a href="/about">
    <li className="transition-transform transform hover:scale-105 hover:text-yellow-400">About Us</li>
  </a>
  <a href="/contact">
    <li className="transition-transform transform hover:scale-105 hover:text-yellow-400">Contact Us</li>
  </a>
  <a href="/privacy">
    <li className="transition-transform transform hover:scale-105 hover:text-yellow-400">Privacy Policy</li>
  </a>
  <a href="/term">
    <li className="transition-transform transform hover:scale-105 hover:text-yellow-400">Term & Conditions</li>
  </a>
  <a href="/delivery">
    <li className="transition-transform transform hover:scale-105 hover:text-yellow-400">Shipping & Returns</li>
  </a>
</ul>
            </div>

            <div className="sm:col-span-1 ml-4 sm:ml-0">
                <p className='text-2xl font-medium mb-5 text-white'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-white'>
                    <li>+91 8449889889</li>
                    <li>Mahandmeofficial10@gmail.com</li>
                </ul>
            </div>
        </div>

        <div className="w-full text-center py-2">
            <hr />
            <p className='text-sm text-white'>Copyright 2024 @ Rankmantra - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;
