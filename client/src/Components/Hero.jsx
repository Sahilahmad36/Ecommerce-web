/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets.js';
import { FaWhatsapp } from 'react-icons/fa'; 

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [assets.hero_img, assets.hero_img2, assets.hero_img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className='flex flex-col sm:flex-row border border-gray-400'>
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[##414141]'>
            <div className="flex items-center gap-2">
              <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
              <p className='font-medium text-sm and md:text-base'>OUR BESTSELLER</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>LUXURY FASHION STORE</h1>
            <div className="flex items-center gap-2">
              <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
              <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <img className='w-full' src={images[currentImageIndex]} alt={`hero-img-${currentImageIndex}`} />
        </div>
      </div>

      <a
        href="https://wa.me/+918630646187" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-400 rounded-3xl p-1 text-white shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out animate-bounce z-50"
      >
        <FaWhatsapp size={52} />
        
      </a>
    </div>
  );
};

export default Hero;
