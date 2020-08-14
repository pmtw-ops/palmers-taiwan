import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative w-full bg-pmbrown-800 text-gray-200 border-b-2 border-orange-500">
      <div className="flex w-full py-2 pt-4 justify-center text-sm bg-gray-600">
        <Link href="#"><svg className="fill-current text-orange-500 inline-block h-10 w-10 m-2" id="Facebook_w_circle" version="1.1" data-name="Facebook w/circle" id="Facebook_w_x2F__circle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20"><title>facebook-with-circle</title><path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M12.274,7.034	h-1.443c-0.171,0-0.361,0.225-0.361,0.524V8.6h1.805l-0.273,1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545V7.726	c0-1.254,0.87-2.273,2.064-2.273h1.443V7.034z" /></svg></Link>
        <Link href="#"><svg className="fill-current text-orange-500 inline-block h-10 w-10 m-2" id="Instagram_w_circle" version="1.1" data-name="Instagram w/circle" id="Instagram_w_x2F__circle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20"><title>instagram-with-circle</title><path d="M13.89777,7.05115a1.65591,1.65591,0,0,0-.94891-0.94891,2.76589,2.76589,0,0,0-.92841-0.17218C11.49316,5.906,11.33508,5.90094,10,5.90094S8.50684,5.906,7.97955,5.93005a2.76589,2.76589,0,0,0-.92841.17218,1.65591,1.65591,0,0,0-.94891.94891,2.76589,2.76589,0,0,0-.17218.92841C5.906,8.50684,5.90094,8.665,5.90094,10s0.00507,1.49316.02911,2.02045a2.76553,2.76553,0,0,0,.17218.92841,1.65591,1.65591,0,0,0,.94891.94891,2.76589,2.76589,0,0,0,.92841.17218c0.52716,0.024.6853,0.02911,2.02045,0.02911s1.49329-.00507,2.02045-0.02911a2.76589,2.76589,0,0,0,.92841-0.17218,1.65591,1.65591,0,0,0,.94891-0.94891,2.76553,2.76553,0,0,0,.17218-0.92841c0.024-.52728.02911-0.68536,0.02911-2.02045S14.094,8.50684,14.06995,7.97955A2.76589,2.76589,0,0,0,13.89777,7.05115ZM10,12.56757A2.56757,2.56757,0,1,1,12.56757,10,2.56756,2.56756,0,0,1,10,12.56757ZM12.669,7.931a0.6,0.6,0,1,1,.6-0.6A0.6,0.6,0,0,1,12.669,7.931ZM11.66669,10A1.66669,1.66669,0,1,1,10,8.33331,1.66671,1.66671,0,0,1,11.66669,10ZM10,0.4A9.6,9.6,0,1,0,19.6,10,9.59995,9.59995,0,0,0,10,.4Zm4.96991,11.6615a3.67039,3.67039,0,0,1-.23242,1.21368,2.55612,2.55612,0,0,1-1.46228,1.46228,3.67039,3.67039,0,0,1-1.21368.23242C11.5282,14.99426,11.35791,15,10,15s-1.5282-.00574-2.06152-0.03009a3.67039,3.67039,0,0,1-1.21368-.23242,2.55612,2.55612,0,0,1-1.46228-1.46228,3.67039,3.67039,0,0,1-.23242-1.21368C5.00574,11.5282,5,11.35791,5,10s0.00574-1.5282.03009-2.06152a3.67039,3.67039,0,0,1,.23242-1.21368A2.55612,2.55612,0,0,1,6.72479,5.26251a3.67039,3.67039,0,0,1,1.21368-.23242C8.4718,5.00574,8.64209,5,10,5s1.5282,0.00574,2.06152.03009a3.67039,3.67039,0,0,1,1.21368.23242,2.55612,2.55612,0,0,1,1.46228,1.46228,3.67039,3.67039,0,0,1,.23242,1.21368C14.99426,8.4718,15,8.64209,15,10S14.99426,11.5282,14.96991,12.06152Z"/></svg></Link>
        <Link href="#"><svg className="fill-current text-orange-500 inline-block h-10 w-10 m-2" id="Youtube_w_circle" version="1.1" data-name="Youtube w/circle" id="Youtube_w_x2F__circle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20"><title>youtube-with-circle</title><path d="M11.603,9.833L9.357,8.785C9.161,8.694,9,8.796,9,9.013v1.974c0,0.217,0.161,0.319,0.357,0.228l2.245-1.048 C11.799,10.075,11.799,9.925,11.603,9.833z M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6	S15.302,0.4,10,0.4z M10,13.9c-4.914,0-5-0.443-5-3.9s0.086-3.9,5-3.9s5,0.443,5,3.9S14.914,13.9,10,13.9z" /></svg></Link>
      </div>
      <div className="block md:flex w-full py-2 pt-2 justify-center text-sm bg-gray-600">
        <div className="p-2 text-gray-100 hover:text-pmbrown-100"><Link href="/" passHref><a className="hover:text-pmbrown-100">首頁</a></Link></div>
        <div className="p-2 text-gray-100 hover:text-pmbrown-100"><Link href="/about"><a className="hover:text-pmbrown-100">關於我們</a></Link></div>
        <div className="p-2 text-gray-100 hover:text-pmbrown-100"><Link href="/contact-us"><a className="hover:text-pmbrown-100">聯絡npm 我們</a></Link></div>
        <div className="p-2 text-gray-100 hover:text-pmbrown-100"><Link href="/news"><a className="hover:text-pmbrown-100">最新消息</a></Link></div>
        <div className="p-2 text-gray-100 hover:text-pmbrown-100"><Link href="/returns"><a className="hover:text-pmbrown-100">退換貨須知</a></Link></div>
        <div className="p-2 text-gray-100 hover:text-pmbrown-100"><Link href="/terms"><a className="hover:text-pmbrown-100">服務約定條款</a></Link></div>
        <div className="p-2 text-gray-100 hover:text-pmbrown-100"><Link href="/cart"><a className="hover:text-pmbrown-100">購物車</a></Link></div>
      </div>

      <div className="flex w-full py-2 justify-center text-gray-300 text-sm">
        &copy; 2020 帕瑪氏台灣 All Rights Reserved.
      </div>
    </footer >
  )
}
