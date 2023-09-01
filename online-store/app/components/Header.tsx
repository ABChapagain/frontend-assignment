'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux'

import ProductSearch from './ProductSearch'
import { RootState } from '../redux/store'

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.carts)

  const pathname = usePathname()

  const [menu, setMenu] = React.useState(false)

  return (
    <nav className='navbar bg-slate-50 sticky top-0 z-10 shadow-sm py-6'>
      <div className='container px-4 mx-auto '>
        <div className='hidden lg:flex items-center justify-between w-full'>
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
                href={'/carts'}
                className={pathname === '/carts' ? 'active' : ''}
              >
                Cart ({cartItems?.cartItems.length})
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex lg:hidden items-center justify-between w-full'>
          <Link
            href={'/'}
            className='btn btn-ghost normal-case text-3xl lg:me-5'
          >
            <h1 className='font-semibold'>Online Store</h1>
          </Link>
          <div onClick={(e) => setMenu(!menu)}>
            {menu ? (
              <AiOutlinePlus className='text-3xl lg:hidden rotate-45' />
            ) : (
              <AiOutlineMenu className='text-3xl lg:hidden' />
            )}
          </div>
        </div>
        {menu && (
          <ul className='lg:hidden flex flex-col gap-5 py-5'>
            <ProductSearch />

            <li>
              <Link className={pathname === '/' ? 'active' : ''} href={'/'}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href={'/carts'}
                className={pathname === '/carts' ? 'active' : ''}
              >
                Cart ({cartItems?.cartItems.length})
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Header
