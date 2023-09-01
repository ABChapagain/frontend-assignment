import React from 'react'

const ProductLoading = () => {
  return (
    <div className='group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'></div>
      <h3 className='mt-4 text-md text-gray-700 space-y-2'>
        <div className='h-2 bg-gray-200 rounded'></div>
      </h3>

      <div className='mt-4 flex justify-between items-center'>
        <div className='space-y-2'>
          <div className='h-2 bg-gray-200 rounded w-8'></div>
          <div className='h-2 bg-gray-200 rounded w-16'></div>
        </div>
        <div className='h-2 bg-gray-200 rounded w-16'></div>
      </div>
    </div>
  )
}

export default ProductLoading
