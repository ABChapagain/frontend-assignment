import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex bg-slate-50 flex-col items-center gap-5 justify-center p-10'>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
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
    </footer>
  )
}

export default Footer
