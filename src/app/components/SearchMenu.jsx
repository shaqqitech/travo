import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const SearchMenu = () => {
  return (
    <main className='w-screen flex justify-center'>
      <div className='w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-xl rounded-2xl'>
        <div className="border-r-2 flex flex-col text-start justify-center items-start px-4">
          <h1 className='text-blue-500'>Located In</h1>
          <p className='w-full text-lg font-bold cursor-pointer flex justify-between items-center'>Bangladesh <IoIosArrowDown className='text-blue-500' /></p>
        </div>
        <div className="border-r-2 flex flex-col text-start justify-center items-start px-4">
          <h1 className='text-blue-500'>Date</h1>
          <p className='w-full text-lg font-bold cursor-pointer flex justify-between items-center'>Wed, 7 Dec <IoIosArrowDown className='text-blue-500' /></p>
        </div>
        <div className="border-r-2 flex flex-col text-start justify-center items-start px-4">
          <h1 className='text-blue-500'>Price Range</h1>
          <p className='w-full text-lg font-bold cursor-pointer flex justify-between items-center'>$400-$700 <IoIosArrowDown className='text-blue-500' /></p>
        </div>
        <div className="bg-blue-500 rounded-tr-2xl rounded-br-2xl flex justify-center items-center cursor-pointer">
          <p className=' font-bold text-xl text-white'>Search</p>
        </div>
      </div>
    </main>
  )
}

export default SearchMenu
