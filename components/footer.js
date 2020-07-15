import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="w-full bg-pmbrown-800 text-gray-200 px-6 border-b-2 border-orange-500">
      <div className="container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm">
        &copy; 2020 E.T. Browne Drug Co., Inc. All Rights Reserved.
				<div className="pt-4 md:p-0 text-center md:text-right text-xs">
          <a href="#" className="text-gray-200 no-underline hover:underline">Privacy Policy</a>
          <a href="#" className="text-gray-200 no-underline hover:underline ml-4">Terms &amp; Conditions</a>
          <a href="#" className="text-gray-200 no-underline hover:underline ml-4">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}
