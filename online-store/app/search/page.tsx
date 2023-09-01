'use client'
import React from 'react'
import ProductLists from '../components/ProductLists'
import { useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import ProductLoading from '../components/ProductLoading'
import { ProductContainer } from '../components/ProductContainer'

const SearchPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [products, setProducts] = React.useState([])

  const query = searchParams.get('q')

  const { isLoading, error, data } = useQuery({
    queryKey: ['search'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then((res) => res.json()),
  })

  if (!query || query === '' || query === null) {
    router.push('/')
  }
  const filteredProducts = data?.filter((product: any) =>
    product.title.toLowerCase().includes(query!.toLowerCase())
  )

  return (
    <section className='py-5'>
      <div className='container mx-auto'>
        <div className='mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-full lg:px-8'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
            Result for the search "{query}"
          </h2>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {isLoading ? (
              Array.from({ length: 20 }, (_, index) => (
                <ProductLoading key={index} />
              ))
            ) : error ? (
              <div>Error fetching data</div>
            ) : filteredProducts?.length === 0 ? (
              <div className='text-center'>No products found</div>
            ) : (
              filteredProducts?.map((product: any) => (
                <ProductContainer key={`${product.id}`} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchPage
