'use client'
// import Link from 'next/link'
import { Link } from 'react-scroll'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'
const Header = () => {
  return (
    <nav className='sticky top-0 flex gap-8 px-6 py-4 md:p-4 md:px-14 shadow-md bg-background  justify-between'>
      <h1 className='text-primary text-lg font-semibold '>
        finsoncoutinho.dev
      </h1>
      <div className='hidden gap-8 md:flex '>
        <Link
          to='home'
          smooth={true}
          duration={500}
          className='hidden text-lg font-semibold  md:block text-white cursor-pointer '
        >
          Home
        </Link>
        <Link
          to='projects'
          smooth={true}
          duration={500}
          className='hidden text-lg font-semibold  md:block  text-white cursor-pointer'
        >
          Projects
        </Link>
        {/* <Link
          to='/'
          smooth={true}
          duration={500}
          className='hidden text-lg font-semibold  md:block text-white '
        >
          About me
        </Link> */}
        <Link
          to='contact'
          smooth={true}
          duration={500}
          className='hidden text-lg font-semibold md:block text-white cursor-pointer'
        >
          Contact me
        </Link>
      </div>
      <div className='md:hidden absolute right-5 top-3'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu size={32} color='white' />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link to='home' smooth={true} duration={500}>
              <DropdownMenuItem>Home</DropdownMenuItem>
            </Link>
            <Link to='projects' smooth={true} duration={500}>
              <DropdownMenuItem>Projects</DropdownMenuItem>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
              <DropdownMenuItem>Contact me</DropdownMenuItem>
            </Link>
            {/* <DropdownMenuItem>About me</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Header
