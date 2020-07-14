import Link from 'next/link'
import DropdownAllProducts from './dropdown-all-products'
import DropdownCollections from './dropdown-collections'

import Container from './container'
import NavMenu from './nav-menu'
import NavMenuMobile from './nav-menu-mobile'

export default function Navbar({ categories, collections }) {
  return (
    // <nav className="w-full bg-white md:pt-0 px-6 shadow-lg relative z-20 border-t border-b border-gray-400">
    //   <div className="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
    //     <div className="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start">
    //       <Link href="/" passHref><a className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400">首頁</a></Link>
    //       <DropdownAllProducts categories={categories}/>
    //       <DropdownCollections collections={collections}/>
    //       <Link href="/about" passHref><a className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400">關於我們</a></Link>
    //       <Link href="/news" passHref><a className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400">最新消息</a></Link>
    //     </div>
    //     <div className="w-full md:w-1/2 text-center md:text-right pb-4 md:p-0">
    //       <input type="search" placeholder="Search..." className="bg-gray-300 border text-sm p-1" />
    //     </div>
    //   </div>
    // </nav>
    <Container>
      <div class="relative bg-white">
        <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <NavMenu />
          <NavMenuMobile />
        </div>
      </div>
    </Container>
  )
}
