import Link from 'next/link'

import DropdownAllProducts from './dropdown-all-products'
import DropdownMore from './dropdown-more'
import DropdownMenuMobile from './nav-menu-mobile'
import { useState } from 'react'

export default function NavMenu({ categories, collections }) {


  return (
    <>
      <div className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
        <nav className="flex space-x-10">
          <Link href="/" passHref>
            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Home
            </a>
          </Link>
          <Link href="/about" passHref>
            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              About
            </a>
          </Link>
          <DropdownAllProducts />
          <Link href="#" passHref>
            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Pricing
            </a>
          </Link>
          <Link href="#" passHref>
            <a href="#" className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Docs
            </a>
          </Link>
          <DropdownMore />
        </nav>
        <div className="flex items-center space-x-8">
          <Link href="#" passHref>
            <a href="#" className="text-base whitespace-no-wrap leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Sign in
            </a>
          </Link>
          <span className="inline-flex rounded-md shadow-sm">
            <Link href="#" passHref>
              <a className="inline-flex whitespace-no-wrap items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Sign up
              </a>
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}
