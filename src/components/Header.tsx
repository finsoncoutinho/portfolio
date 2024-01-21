import Link from 'next/link'
import { Link as scrollLink } from 'react-scroll'
import React from 'react'

const Header = () => {
  return (
    <nav className='flex gap-8 px-16 py-4 shadow-md bg-secondary'>
      <Link
        href='/'
        className='hidden text-lg font-bold  md:block hover:text-accent  '
      >
        Home
      </Link>
      <Link
        href='/'
        className='hidden text-lg font-bold  md:block  hover:text-accent'
      >
        Projects
      </Link>
      <Link
        href='/'
        className='hidden text-lg font-bold  md:block hover:text-accent '
      >
        About me
      </Link>
      <Link
        href='/'
        className='hidden text-lg font-bold  md:block hover:text-accent'
      >
        Contact me
      </Link>
    </nav>
  )
}

export default Header
