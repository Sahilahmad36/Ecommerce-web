import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name,about, price }) => {
  const { currency } = useContext(ShopContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
      }, 1000); 

      return () => clearInterval(interval); 
    }
  }, [isHovered, image.length]);

  const handleMouseEnter = () => {
    setIsHovered(true); 
  };

  const handleMouseLeave = () => {
    setIsHovered(false); 
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index); 
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

 
  const discountPrice = (price * 0.90).toFixed(2);

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer" onClick={scrollToTop}>
      <div
        className="overflow-hidden relative"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[currentImageIndex]}
          alt={name}
        />
        {isHovered && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {image.map((_, index) => (
              <span
                key={index}
                className={`w-2.5 h-2.5 rounded-full bg-white cursor-pointer ${
                  index === currentImageIndex ? 'bg-opacity-75' : 'bg-opacity-50'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
  <p className="pt-3 pb-1 text-sm">{name}</p>
  <p className="pt-3 pb-1 text-sm text-red-700 font-bold">{about}</p>
</div>

      <p className="text-sm font-medium">
        <span className="line-through text-gray-500">{currency}{price}</span> 
        <span className="ml-2">{currency}{discountPrice}</span>
      </p>
    </Link>
  ); 
};

export default ProductItem;
