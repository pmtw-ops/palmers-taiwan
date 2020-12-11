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
      {/* --- Menu in MD+ Screen --- */}
      <div className="hidden md:flex justify-between h-24">
        <div className="">
          <img className="border object-cover h-full" src="https://placehold.it/158x125"></img>
        </div>
        <div>
          <div className="flex item-center">
            <div className="">首頁</div>
            <div className="">關於我們</div>
            <div className="">產品系列</div>
            <div className="">最新消息</div>
            <div className="">購物車</div>
            <div className="">加入會員／登入</div>
          </div>
        </div>
      </div>

      {/* --- Menu in SM- Screen --- */}
      <div className="md:hidden justify-between h-16">
        <div>Logo</div>
        <div>
          <div>
            Menu block
          </div>
        </div>
      </div>
    </Container>
  )
}
