import React from 'react'

const ProductDetailsLoading = () => {
  return (
    <div className='lg:w-4/5 mx-auto flex flex-wrap'>
      <div className='lg:w-1/2 h-[400px] bg-gray-200 w-full object-cover object-center rounded border border-gray-200'></div>
      <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-2'>
        <div className='h-2 bg-gray-200 rounded w-16'></div>
        <div className='h-2 bg-gray-200 rounded w-full'></div>
        <div className='h-2 bg-gray-200 rounded w-1/2'></div>
        <div className='flex mb-4'></div>
        <div className='h-2 bg-gray-200 rounded w-1/3'></div>
        <div className='space-y-2 mt-6'>
          <div className='h-2 bg-gray-200 rounded w-full'></div>
          <div className='h-2 bg-gray-200 rounded w-full'></div>
          <div className='h-2 bg-gray-200 rounded w-full'></div>
          <div className='h-2 bg-gray-200 rounded w-full'></div>
        </div>
        <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'></div>
        <div className='flex'>
          <span className='title-font font-medium text-2xl text-gray-900'>
            <div className='h-2 bg-gray-200 rounded w-16'></div>
          </span>
          <button className='flex ml-auto text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsLoading
