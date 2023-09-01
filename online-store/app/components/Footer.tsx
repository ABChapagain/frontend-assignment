import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex bg-blue-100 flex-col items-center gap-5 justify-center p-10'>
      <div className='flex gap-4'>
        <Link href={'/shop'} className='link link-hover'>
          Shop
        </Link>
        <Link href={'/cart'} className='link link-hover'>
          Cart (2)
        </Link>
      </div>
      <div className='text-center space-y-3'>
        <p>
          Copyright &copy; {new Date().getFullYear()} - All right reserved by
          Suchana
        </p>
        <p>
          Made with 💖 by{' '}
          <a
            className='btn-link text-blue-500'
            target='_blank'
            href='http://achyutchapagain.com.np'
          >
            ABChapagain
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
