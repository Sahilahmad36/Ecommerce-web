/* eslint-disable no-unused-vars */
import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets.js'
import NewsletterBox from '../Components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>679B, Sri sai bhavan,<br /> watch tower Colony, <br /> premnagar market, <br />dehradun - 620000.</p>
          <p className='text-gray-500'>Tel: (+91) 9200000000 <br/> Email : sahilrankmantra@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Have any questions? Connect with me! Mah & Me Creation</p>
          {/* <p className='text-gray-500'>Learn more about our teams and job openings.</p> */}
          <a href='/connect'>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Get in Touch</button>
          </a>
        </div>
      </div>
      <NewsletterBox />

    </div>
  )
}

export default Contact