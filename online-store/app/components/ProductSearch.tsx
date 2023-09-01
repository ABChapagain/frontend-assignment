'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const ProductSearch = () => {
  const router = useRouter()
  const [search, setSearch] = React.useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const encodeSearchQuery = encodeURI(search.trim())
    router.push(`/search?q=${encodeSearchQuery}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='p-2 outline-none w-56'
        placeholder='Search for products'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='btn btn-ghost bg-blue-400 text-white p-2 border-l-2'>
        Search
      </button>
    </form>
  )
}

export default ProductSearch
