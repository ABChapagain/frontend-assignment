'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductContainer } from './ProductContainer'
import ProductLoading from './ProductLoading'
import { useSelector, useDispatch } from 'react-redux'

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

const ProductLists = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then((res) => res.json()),
  })

  return (
    <section className='py-5'>
      <div className='container mx-auto'>
        <div className='mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-full lg:px-8'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            Some Products
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {isLoading ? (
              Array.from({ length: 20 }, (_, index) => (
                <ProductLoading key={index} />
              ))
            ) : error ? (
              <div>Error fetching data</div>
            ) : (
              data?.map((product: Product) => (
                <ProductContainer key={`${product.id}`} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductLists
