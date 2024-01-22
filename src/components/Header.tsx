import Link from 'next/link'
import { Link as scrollLink } from 'react-scroll'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'
const Header = () => {
  return (
    <nav className='relative flex gap-8 px-16 py-7 md:p-4 shadow-md bg-background'>
      <div className='hidden gap-8 md:flex'>
        <Link
          href='/'
          className='hidden text-lg font-semibold  md:block text-white  '
        >
          Home
        </Link>
        <Link
          href='/'
          className='hidden text-lg font-semibold  md:block  text-white'
        >
          Projects
        </Link>
        <Link
          href='/'
          className='hidden text-lg font-semibold  md:block text-white '
        >
          About me
        </Link>
        <Link
          href='/'
          className='hidden text-lg font-semibold md:block text-white'
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
            <DropdownMenuLabel>Home</DropdownMenuLabel>

            <DropdownMenuItem>Projects</DropdownMenuItem>
            <DropdownMenuItem>About me</DropdownMenuItem>
            <DropdownMenuItem>Contact me</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Header
