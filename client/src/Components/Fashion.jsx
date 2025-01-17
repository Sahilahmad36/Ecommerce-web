import React from 'react';
import { assets } from '../assets/assets.js';
import {Link} from "react-router-dom";

const Fashion = () => {
  return (
    <div className="flex flex-wrap justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 py-16">
      <div className="w-full sm:w-[500px] md:w-[500px] lg:w-[500px] h-[400px] sm:h-[400px] md:h-[450px] lg:h-[600px] relative overflow-hidden shadow-lg">
        <div className="relative w-full h-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
            autoPlay
            loop
            muted
            preload="auto"  
          >
            <source src={assets.video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Gowns Dress</h2>
          <p className="text-sm sm:text-md mb-4">
            Elegant gowns and dresses for every occasion. Style meets comfort.
          </p>
          <a href="/gown">
          <button
            className="relative overflow-hidden text-black py-2 px-6 group"
            style={{
              background: "rgb(118 222 144)"
            }}
          >
            <span className="relative z-10">Shop Now</span>
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 group-hover:left-0 transition-all duration-500"></span>
          </button>
          </a>
        </div>
      </div>

      <div className="w-full sm:w-[500px] md:w-[550px] lg:w-[500px] h-[400px] sm:h-[400px] md:h-[450px] lg:h-[600px] relative overflow-hidden shadow-lg">
        <div className="relative w-full h-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-110"
            autoPlay
            loop
            muted
            preload="auto"  
          >
            <source src={assets.video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 uppercase">Co-ord Sets</h2>
          <p className="text-sm sm:text-md mb-4">
            Trendy co-ord sets for a stylish, effortless, and chic look.
          </p>
          <a href="/cordset">
          <button
            className="relative overflow-hidden text-black py-2 px-6 group"
            style={{
              background: "rgb(118 222 144)"
            }}
          >
            <span className="relative z-10">Shop Now</span>
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 group-hover:left-0 transition-all duration-500"></span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
