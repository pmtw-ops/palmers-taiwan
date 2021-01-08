import Link from 'next/link'
import Container from '@/components/container'
import { useState } from 'react'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function NavMenuResponsive({ appData }) {
  let [menuP, setMenuProfile] = useState(false);
  let [menuM, setMenuMobile] = useState(false);

  const toggleProfile = () => {
    setMenuProfile(menuP = !menuP);
  }
  const toggleMobile = () => {
    setMenuMobile(menuM = !menuM);
    if (menuM === false) {
      setMenuProfile(false);
    }
  }
  const toggleClose = () => {
    setMenuProfile(false);
    setMenuMobile(false);
  }

  let logoUrl = CMS_URL + '/' + (appData ? appData.logo[0].url : '');
  let logoAlt = appData ? appData.logo[0].alternativeText : 'palmers_logo';
  return (
    <Container>
      <nav className="relative z-10">
        <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* --- Mobile Menu Button --- */}
              <button onClick={() => { toggleMobile() }} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className={(!menuM ? "block" : "hidden") + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={(menuM ? "block" : "hidden") + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* --- Main Menu --- */}
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" passHref>
                  <img className="block rounded-lg h-20 w-auto" src={logoUrl} alt={logoAlt} />
                </Link>
              </div>
              <div className="hidden md:block md:ml-6">
                <div className="flex mt-4 space-x-4">
                  <Link href="/" passHref><a href="" className="text-pmbrown-700 text-lg hover:bg-gray-400 hover:text-pmbrown-100 px-3 py-2 rounded-md font-medium">首頁</a></Link>
                  <Link href="/about" passHref><a href="" className="text-pmbrown-700 text-lg hover:bg-gray-400 hover:text-pmbrown-100 px-3 py-2 rounded-md font-medium">關於我們</a></Link>
                  <Link href="/collections" passHref><a href="" className="text-pmbrown-700 text-lg hover:bg-gray-400 hover:text-pmbrown-100 px-3 py-2 rounded-md font-medium">產品系列</a></Link>
                  <Link href="/news" passHref><a href="" className="text-pmbrown-700 text-lg hover:bg-gray-400 hover:text-pmbrown-100 px-3 py-2 rounded-md font-medium">最新消息</a></Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              {/* --- Notifications --- */}
              {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button> */}

              {/* --- Profile Drop Down --- */}
              <div className="ml-3 relative">
                <div>
                  <button onClick={() => { toggleProfile() }} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/100" alt="" />
                  </button>
                </div>
                <div className={(menuP ? "block" : "hidden") + " origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"} role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">我的帳戶</a>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">設定</a>
                  <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">登出</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={(menuM ? "block" : "hidden") + " md:hidden"}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/"><a onClick={() => { toggleClose() }} className="text-pmbrown-200 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">首頁</a></Link>
            <Link href="/about"><a onClick={() => { toggleClose() }} className="text-pmbrown-200 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">關於我們</a></Link>
            <Link href="/collections"><a onClick={() => { toggleClose() }} className="text-pmbrown-200 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">產品系列</a></Link>
            <Link href="/news"><a onClick={() => { toggleClose() }} className="text-pmbrown-200 hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">最新消息</a></Link>
          </div>
        </div>
      </nav>

      {/* --- Close All Menu --- */}
      <button onClick={() => toggleClose()} className={((menuP || menuM) ? " " : "hidden ") + "fixed top-0 right-0 bottom-0 left-0 h-full w-full cursor-default focus:outline-none"}></button>
    </Container>
  )
}
