'use client'
import ProductDetails from '@/app/components/ProductDetails'
import ProductDetailsLoading from '@/app/components/ProductDetailsLoading'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'

type ProductDetailsPageProps = {
  params: {
    id: string
  }
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({
  params: { id },
}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['productDetails'],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
        res.json()
      ),
  })

  if (error) return <div>Error: {`${error}`}</div>

  return (
    <section className='text-gray-700 body-font overflow-hidden bg-white'>
      <div className='container px-5 py-5 mx-auto'>
        <div className='my-5'>
          <Link className='bg-slate-100 px-5 py-3' href='/'>
            Go Home
          </Link>
        </div>
        {isLoading ? <ProductDetailsLoading /> : <ProductDetails data={data} />}
      </div>
    </section>
  )
}

export default ProductDetailsPage
