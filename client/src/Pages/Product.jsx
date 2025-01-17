/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets.js';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [showSizeChart, setShowSizeChart] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  const discountPrice = (productData ? productData.price * 0.90 : 0).toFixed(2);

  const handleAddToCart = () => {
    if (!productData.about || productData.about.trim() === '') {
      addToCart(productData._id, size);  
    } else {
      if (productData && productData.stock && productData.stock > 0) {
        addToCart(productData._id, size);  
      } else {
        alert('This product is out of stock.');
      }
    }
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        <div className="flex-1">
        <div className="flex items-center gap-4">
        <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
        <h1 className="font-bold text-2xl mt-2 text-red-700">{productData.about}</h1>
        </div>

          <div className="flex item-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-5 5" />
            <img src={assets.star_icon} alt="" className="w-5 5" />
            <img src={assets.star_icon} alt="" className="w-5 5" />
            <img src={assets.star_icon} alt="" className="w-5 5" />
            <img src={assets.star_dull_icon} alt="" className="w-5 5" />
            <p className="pl-2">(120)</p>
          </div>
          <div className="mt-5">
            <p className="text-3xl font-medium">
              <span className="line-through text-gray-500">{currency}{productData.price}</span>
              <span className="ml-2">{currency}{discountPrice}</span>
            </p>
          </div>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <button
            onClick={() => setShowSizeChart(!showSizeChart)}
            className="mt-4 flex items-center text-md text-blue-500 border-2 p-2"
          >
            <span>{showSizeChart ? 'Hide Size Chart' : 'View Size Chart'}</span>
            <svg
              className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${showSizeChart ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {showSizeChart && (
            <div
              className="mt-4 overflow-x-auto transition-all duration-300 ease-in-out transform max-h-96"
              style={{ animation: 'fadeIn 0.5s' }}
            >
              <table className="min-w-full table-auto text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4">Size</th>
                    <th className="text-left py-2 px-4">Chest (inches)</th>
                    <th className="text-left py-2 px-4">Waist (inches)</th>
                    <th className="text-left py-2 px-4">Hip (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">XS</td>
                    <td className="py-2 px-4">34</td>
                    <td className="py-2 px-4">30</td>
                    <td className="py-2 px-4">37</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">S</td>
                    <td className="py-2 px-4">36</td>
                    <td className="py-2 px-4">32</td>
                    <td className="py-2 px-4">39</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">M</td>
                    <td className="py-2 px-4">38</td>
                    <td className="py-2 px-4">34</td>
                    <td className="py-2 px-4">41</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">L</td>
                    <td className="py-2 px-4">40</td>
                    <td className="py-2 px-4">36</td>
                    <td className="py-2 px-4">44</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">XL</td>
                    <td className="py-2 px-4">42</td>
                    <td className="py-2 px-4">38</td>
                    <td className="py-2 px-4">46</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">XXL</td>
                    <td className="py-2 px-4">44</td>
                    <td className="py-2 px-4">40</td>
                    <td className="py-2 px-4">48</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online store where customers can buy and sell products and services
            over the internet. It is the virtual equivalent of a physical store, with product listings, categories,
            reviews, and a cash register.
          </p>
          <p>
            An e-commerce website is one that allows people to buy and sell physical goods, services, and digital
            products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a
            business can process orders, accept payments, manage shipping and logistics, and provide customer service.
          </p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
