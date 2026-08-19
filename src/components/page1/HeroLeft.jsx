import React from 'react'

const HeroLeft = () => {
  return (
    <div className='h-full w-3/5 flex flex-col gap-8'>
      <h1 className='text-5xl font-bold text-blue-500 leading-normal'>Making <span className='text-gray-800'>Health</span> <br /> Care Better Together</h1>
      <p className='text-lg text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ipsa possimus optio illum asperiores aperiam dignissimos ea fugit unde obcaecati.</p>

      <div className='bg-blue-100 w-fit p-2 flex gap-4 rounded-2xl'>
        <i className="ri-stethoscope-line text-2xl"></i>
        <input type="text" placeholder='Select Your Category' className='outline-none border-none' />
        <button className='bg-white py-1 px-8 rounded-lg text-blue-600 font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white'>Search</button>
      </div>

      <div className='text-gray-600 flex gap-4 items-center mb-4'>
        Not yet community member? 
        <a href="#" className='text-blue-600 font-semibold'>Sign Up</a> 
        <button className='h-[40px] w-[40px] rounded-full bg-white shadow-xl cursor-pointer  hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300'><i className="ri-syringe-line"></i></button>
      </div>
    </div>
  )
}

export default HeroLeft
