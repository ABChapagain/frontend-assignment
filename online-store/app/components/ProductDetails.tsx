import React from 'react'

type Product = {
  id: Number
  title: string
  description: string
  image: string
  category: string
  rating: {
    rate: Number
    count: Number
  }
  price: Number
}

const ProductDetails = ({ data }: { data: Product }) => {
  return (
    <div className='lg:w-4/5 mx-auto flex flex-wrap'>
      <img
        alt='ecommerce'
        className='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
        src={data?.image}
      />
      <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
        <h2 className='text-sm title-font text-gray-500 tracking-widest'>
          {data?.category}
        </h2>
        <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
          {data?.title}
        </h1>
        <div className='flex mb-4'>
          <span className='text-gray-600'>
            {`${data?.rating?.rate}`} rating by{' '}
            {`${data?.rating?.count} customers`}
          </span>
        </div>
        <p className='leading-relaxed'>{data?.description}</p>
        <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'></div>
        <div className='flex'>
          <span className='title-font font-medium text-2xl text-gray-900'>
            ${`${data?.price}`}
          </span>
          <button className='flex ml-auto text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
