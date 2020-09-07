import Link from 'next/link'
import Container from '@/components/container'
import DropdownAllProducts from './dropdown-all-products'
import DropdownCollections from './dropdown-collections'
import { useState } from 'react'

export default function NavMenuResponsive({ categories, collections }) {
  let [menuAP, setMenuAP] = useState(false);
  let [menuC, setMenuC] = useState(false);
  let [menuM, setMenuMobile] = useState(false);

  const toggleAP = () => {
    setMenuAP(menuAP = !menuAP);
    if (menuC === true) setMenuC(false);
  }
  const toggleC = () => {
    setMenuC(menuC = !menuC);
    if (menuAP === true) setMenuAP(false);
  }
  const toggleMobile = () => {
    setMenuMobile(menuM = !menuM);
    if (menuM === false) {
      setMenuAP(false);
      setMenuC(false);
    }
  }
  const toggleClose = () => {
    setMenuAP(false);
    setMenuC(false);
    setMenuMobile(false);
  }
  return (
    <Container>
      <div className="z-0 relative">
        {/* ---------------------------- PC Menu ---------------------------- */}
        <div className="hidden md:flex md:items-center md:justify-between md:relative md:z-10 md:bg-white">
          <div className="hidden md:flex md:justify-around md:px-2 md:py-6">
            <button type="button" className="px-2 text-pmbrown-500 font-medium focus:text-pmbrown-100 hover:text-pmbrown-100 focus:outline-none focus:text-pmbrown-100 transition ease-in-out duration-150">
              <Link href="/"><span>首頁</span></Link>
            </button>
            <button type="button" className="px-4 text-pmbrown-500 font-medium focus:text-pmbrown-100 hover:text-pmbrown-100 focus:outline-none focus:text-pmbrown-100 transition ease-in-out duration-150">
              <Link href="/about"><span>關於我們</span></Link>
            </button>
            {/* <button type="button" onClick={() => toggleAP()} className="px-4 text-pmbrown-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium focus:text-pmbrown-100 hover:text-pmbrown-100 focus:outline-none focus:text-pmbrown-100 transition ease-in-out duration-150">
              <span>全部產品</span>
              <svg className="text-pmbrown-500 h-5 w-5 focus:text-gray-600 group-hover:text-pmbrown-100 group-focus:text-pmbrown-100 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button> */}
            <button type="button" onClick={() => toggleC()} className="px-4 text-pmbrown-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium focus:text-pmbrown-100 hover:text-pmbrown-100 focus:outline-none focus:text-pmbrown-100 transition ease-in-out duration-150">
              <span>產品系列</span>
              <svg className="text-pmbrown-500 h-5 w-5 focus:text-gray-600 group-hover:text-pmbrown-100 group-focus:text-pmbrown-100 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button type="button" className="px-4 text-pmbrown-500 font-medium focus:text-pmbrown-100 hover:text-pmbrown-100 focus:outline-none focus:text-pmbrown-100 transition ease-in-out duration-150">
              <Link href="/news"><span>口碑分享</span></Link>
            </button>
            <button type="button" className="px-4 text-pmbrown-500 font-medium focus:text-pmbrown-100 hover:text-pmbrown-100 focus:outline-none focus:text-pmbrown-100 transition ease-in-out duration-150">
              <Link href="/news"><span>最新消息</span></Link>
            </button>
          </div>
          <div className="hidden fill-current text-pmbrown-700 md:flex md:items-center md:space-x-8 md:px-4">
            <Link href="#" passHref>
              <svg className="opacity-75 hover:opacity-100 focus:opacity-100" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M19.757 20.171c-.791.524-1.739.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.018-.305 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-7.654.829h-12.103v-20h7c1.695 1.942 2.371 3 4 3h11v7.103c-1.271-1.297-3.042-2.103-5-2.103-3.863 0-7 3.137-7 7 0 1.958.806 3.729 2.103 5zm4.897-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" /></svg>
            </Link>
            <Link href="#" passHref>
              <svg className="opacity-75 hover:opacity-100 focus:opacity-100" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M13 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm-2.947 10l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z" /></svg>
            </Link>
          </div>
        </div>

        {/* ---------------------------- Mobile Menu ---------------------------- */}
        <div className="relative z-10 bg-white md:hidden">
          <div className="flex items-center justify-between md:hidden">
            <div>{' '}</div>
            <button onClick={() => toggleMobile()} className="p-3 fill-current text-pmbrown-700 opacity-50 hover:opacity-100 focus:opacity-100 focus:outline-none md:hidden">
              {!menuM ? <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" /><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" /></svg>
                : <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" /></svg>}
            </button>
          </div>
          <div className={menuM ? "block" : "hidden"}>
            <Link href="/" passHref>
              <div className="block p-1 m-1 text-pmbrown-500 rounded focus:text-pmbrown-100 hover:text-pmbrown-100 hover:bg-gray-100">
                首頁
              </div>
            </Link>
            <Link href="/about">
              <div className="block p-1 m-1 text-pmbrown-500 rounded focus:text-pmbrown-100 hover:text-pmbrown-100 hover:bg-gray-100">
                關於我們
              </div>
            </Link>
            {/* <div onClick={() => toggleAP()} className="flex p-1 m-1 text-pmbrown-500 rounded group focus:text-pmbrown-100 hover:text-pmbrown-100 hover:bg-gray-100">
              <span>全部產品</span>
              <svg className="fill-current text-pmbrown-500 h-5 w-5 focus:text-pmbrown-100 group-hover:text-pmbrown-100 group-focus:text-pmbrown-100 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div> */}
            <div onClick={() => toggleC()} className="flex p-1 m-1 text-pmbrown-500 rounded group focus:text-pmbrown-100 hover:text-pmbrown-100 hover:bg-gray-100">
              <span>產品系列</span>
              <svg className="fill-current text-pmbrown-500 h-5 w-5 focus:text-pmbrown-100 group-hover:text-pmbrown-100 group-focus:text-pmbrown-100 transition ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <Link href="/news">
              <div className="block p-1 m-1 text-pmbrown-500 rounded focus:text-pmbrown-100 hover:text-pmbrown-100 hover:bg-gray-100">
                口碑分享
              </div>
            </Link>
            <Link href="/news">
              <div className="block p-1 m-1 text-pmbrown-500 rounded focus:text-pmbrown-100 hover:text-pmbrown-100 hover:bg-gray-100">
                最新消息
              </div>
            </Link>
          </div>
        </div>

        {/* ------------------------------------------ Dropdown Menus ------------------------------------------ */}
        <button onClick={() => toggleClose()} className={(menuAP || menuC || menuM ? " " : "hidden ") + "fixed top-0 right-0 bottom-0 left-0 h-full w-full cursor-default focus:outline-none"}></button>
        <DropdownAllProducts menu={menuAP} categories={categories} />
        <DropdownCollections menu={menuC} collections={collections} />
      </div>
    </Container>
  )
}
