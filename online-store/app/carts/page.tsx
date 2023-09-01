'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useDispatch } from 'react-redux'
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from '../redux/features/carts/cartSlice'

const CartPage = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.carts)

  return (
    <section className='text-gray-700 body-font overflow-hidden bg-white'>
      <div className='container px-5 py-5 mx-auto'>
        <h1 className='mb-10 text-center text-2xl font-bold'>Cart Items</h1>
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
          <div className='rounded-lg md:w-2/3'>
            {cart.cartItems.length === 0 ? (
              <div className='flex justify-center items-center h-96'>
                <p className='text-2xl font-bold text-gray-500'>
                  Your cart is empty
                </p>
              </div>
            ) : (
              cart.cartItems.map((item) => (
                <div
                  key={`${item.id}`}
                  className='justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'
                >
                  <img
                    src={item.image}
                    alt='product-image'
                    className='w-full rounded-lg sm:w-40'
                  />
                  <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                    <div className='mt-5 sm:mt-0'>
                      <h2 className='text-lg font-bold text-gray-900'>
                        {item.title}
                      </h2>
                      <p className='mt-1 text-xs text-gray-700'>
                        {item.category}
                      </p>
                    </div>
                    <div className='mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
                      <div className='flex items-center border-gray-100'>
                        <span
                          className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-black/80 hover:text-blue-50'
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          {' '}
                          -{' '}
                        </span>
                        <input
                          className='h-8 w-8 border bg-white text-center text-xs outline-none'
                          type='number'
                          value={item.quantity}
                          min='1'
                        />
                        <span
                          className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-black/80 hover:text-blue-50'
                          onClick={() => dispatch(addToCart(item))}
                        >
                          {' '}
                          +{' '}
                        </span>
                      </div>
                      <div className='flex items-center space-x-4'>
                        <p className='text-sm'>Rs {`${item.price}`}</p>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500'
                          onClick={() => dispatch(deleteFromCart(item.id))}
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
            <div className='mb-2 flex justify-between'>
              <p className='text-gray-700'>Subtotal</p>
              <p className='text-gray-700'>Rs {cart.totalAmount.toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-gray-700'>Shipping</p>
              <p className='text-gray-700'>Rs 4.99</p>
            </div>
            <hr className='my-4' />
            <div className='flex justify-between'>
              <p className='text-lg font-bold'>Total</p>
              <div className=''>
                <p className='mb-1 text-lg font-bold'>
                  Rs {(cart.totalAmount + 4.99).toFixed(2)}
                </p>
                <p className='text-sm text-gray-700'>including VAT</p>
              </div>
            </div>
            <button
              className='mt-6 w-full bg-black py-1.5 font-medium text-blue-50 hover:bg-black/80'
              onClick={() => alert('Checkout functionality not added!')}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
