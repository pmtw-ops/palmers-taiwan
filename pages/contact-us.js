
import Layout from '@/components/layout'
import Container from '@/components/container'
import { getAllPostsForHome } from '@/lib/api_products'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

import CardProduct from '@/components/product/card-product'

import Link from 'next/link'


export default function Index({ categories, collections, product, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <img className="" src="https://placehold.it/1920x550" alt=""></img>
      <Container>
        <h1 className="p-2 mt-5 font-bold text-pmbrown-800 text-6xl text-center">需要協助？</h1>
        <h1 className="p-2 font-bold text-pmbrown-700 text-3xl text-center">請留下您的聯絡訊息</h1>
        <div className="grid grid-gap-4 grid-flow-row p-4 text-center m-4 md:grid-cols-2 md:divide-x">
          <div className="px-4">
            <h3 className="p-2 font-bold text-pmbrown-800 text-2xl">我們的資料</h3>
            <h5 className="p-2 mt-4 text-pmbrown-800 text-xl">客服信箱：</h5>
            <div className="p-2 break-words text-pmbrown-600">emailAddress@PalmersTaiwan.com.tw</div>
            <h5 className="p-2 mt-4 text-pmbrown-800 text-xl">客服電話：</h5>
            <div className="p-2 text-pmbrown-600">0800-555-988</div>
            <div className="p-2 text-pmbrown-600">(星期一～星期五 10:00~12:00/14:00~17:00，國定假日除外)</div>
            <h5 className="p-2 mt-4 text-pmbrown-800 text-xl">地址：</h5>
            <div className="p-2 text-pmbrown-600">台中市梧棲區自立路373號</div>
          </div>
          <div>
            <form className="w-full max-w-sm p-4">
              <div className="flex items-center border-b border-pmbrown-400 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="姓名" aria-label="Full name" />
              </div>
              <div className="flex items-center border-b border-pmbrown-400 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="電話" aria-label="Full name" />
              </div>
              <div className="flex items-center border-b border-pmbrown-400 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Full name" />
              </div>
              <div className="mt-4 sm:col-span-6">
                <div className="mt-1 rounded-md shadow-sm">
                  <textarea id="about" rows="3" className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="留言"></textarea>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-flex rounded-md shadow-sm">
                  <button type="button" className="inline-flex px-4 py-2 border border-gray-300 text-base leading-6 font-medium rounded-md text-pmbrown-700 bg-white hover:text-pmbrown-200 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                  送出</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  //const allPosts = (await getAllPostsForHome(preview)) || []
  // console.log(allPosts)

  const product = {
    title: '帕瑪氏水嫩潔顏卸妝乳150g',
    image: 'https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    shortDesc: '清潔肌膚，使肌膚淨白柔嫩',
    price: 1300,
    rating: 3.5
  }

  return {
    props: { product } //allPosts, preview },
  }
}
