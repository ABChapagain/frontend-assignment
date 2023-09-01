'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import ProductSearch from './ProductSearch'

const Header = () => {
  const pathname = usePathname()

  return (
    <nav className='navbar bg-blue-100 sticky top-0 z-10 shadow-sm py-6'>
      <div className='container px-4 mx-auto flex justify-between'>
        <div className='flex items-center justify-between w-full'>
          <Link
            href={'/'}
            className='btn btn-ghost normal-case text-3xl lg:me-5'
          >
            <h1 className='font-semibold'>Online Store</h1>
          </Link>
          <ProductSearch />

          <ul className='flex gap-5'>
            <li>
              <Link className={pathname === '/' ? 'active' : ''} href={'/'}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href={'/cart'}
                className={pathname === '/cart' ? 'active' : ''}
              >
                Cart (2)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
