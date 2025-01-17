import React from 'react';
import { assets } from '../assets/assets';

const Design = () => {
  return (
    <div className="relative group w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"> 
        <video
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          autoPlay
          loop
          muted
        >
          <source src={assets.video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 sm:p-6 md:p-8 lg:p-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">
        Lehengas
        </h2>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-6 text-center">
          Discover the perfect lehengas for every occasion. Style with comfort and confidence.
        </p>
        <a href="/lehengas">
        <button 
          className="relative overflow-hidden text-black py-2 px-6 group pointer-events-auto"
          style={{
            background:"rgb(118 222 144)"
          }}
        >
          <span className="relative z-10">Shop Now</span>
          <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 group-hover:left-0 transition-all duration-500"></span>
        </button>
        </a>
      </div>
    </div>
  );
};

export default Design;
