import Link from 'next/link'
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

export const ProductContainer = ({ product }: { product: Product }) => {
  return (
    <div className='group relative'>
      <div className='h-80 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img
          src={product.image}
          alt={product.title}
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
        />
      </div>
      <h3 className='mt-4 text-md text-gray-700'>
        <Link href={`/products/${product.id}`}>
          <span aria-hidden='true' className='absolute inset-0' />
          {product.title}
        </Link>
      </h3>
      <div className='mt-4 flex justify-between items-center'>
        <div>
          <p className='mt-1 text-sm text-black font-bold'>{`Rs ${product.price}`}</p>
          <p className='mt-1 text-sm text-gray-500'>{product.category}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>
          {`${product.rating.rate} by ${product.rating.count}`}
        </p>
      </div>
    </div>
  )
}
