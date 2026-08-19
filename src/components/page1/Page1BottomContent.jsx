import React from 'react'

const Page1BottomContent = () => {
  return (
    <>
    <div>
        <div className='text-gray-600'>
          Date 
          <i className="ri-arrow-down-s-line pl-1 cursor-pointer"></i>
        </div>
        <p className='text-lg font-semibold text-gray-900'>Thus, May 20, 2026</p>
      </div>

      <div>
        <div className='text-gray-600'>
          Location 
          <i className="ri-arrow-down-s-line pl-1 cursor-pointer"></i>
        </div>
        <p className='text-lg font-semibold text-gray-900'>Bristol Branch</p>
      </div>

      <div>
        <div className='text-gray-600'>
          Service 
          <i className="ri-arrow-down-s-line pl-1 cursor-pointer"></i>
        </div>
        <p className='text-lg font-semibold text-gray-900'>Otolaryngology</p>
      </div>

      <button className='bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded-xl cursor-pointer transition duration-300'>
        Get Appointment
      </button>
      </>
  )
}

export default Page1BottomContent
