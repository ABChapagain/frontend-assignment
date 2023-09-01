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

  if (error) return <div>Error: </div>

  return (
    <section className='text-gray-700 body-font overflow-hidden bg-white'>
      <div className='container px-5 py-24 mx-auto'>
        <Link href='/'>Back</Link>
        {isLoading ? <ProductDetailsLoading /> : <ProductDetails data={data} />}
      </div>
    </section>
  )
}

export default ProductDetailsPage
