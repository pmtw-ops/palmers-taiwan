
import Layout from '@/components/layout'
import Container from '@/components/container'
import { getAllPostsForHome } from '@/lib/api_products'
import NewsItem from '@/components/news/news-item'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

import CardProduct from '@/components/product/card-product'

import Link from 'next/link'

const NEXT_PUBLIC_STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL


export default function Index({ categories, collections, product, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <img className="" src="https://via.placeholder.com/1920x550" alt=""></img>
      <Container>
        <div class="grid grid-cols-1 gap-2 border-2 border-black mb-2">
          <div className="grid grid-cols-5 border-2 border-green-400 w-full px-2">
            <div className="p-4 col-span-1">
              Post
            </div>
            <div className="p-4 col-span-3">
              Title
            </div>
            <div className="p-4 col-span-1">
              Post Date
            </div>
          </div>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
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
