
import Layout from '@/components/layout'
import Container from '@/components/container'
import { getAllPostsForHome } from '@/graphql/api_products'
import { getAppData } from '@/graphql/api_app'
import NewsItem from '@/components/news/news-item'
import Head from 'next/head'
import Image from 'next/image'
import { CMS_NAME } from '@/lib/constants'

import CardProduct from '@/components/product/card-product'

import Link from 'next/link'

export default function Index({ appData }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <Layout appData={appData}>
      <Image className="" src="https://via.placeholder.com/1920x550" alt="" width={1920} height={550} />
      <Container>
        <div className="grid grid-cols-1 gap-2 border-2 border-black mb-2">
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
          <hr className="border-accent-7" />
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
    </Layout>
  )
}

export async function getStaticProps({ preview = null }) {
  const appData = (await getAppData()) || []

  return {
    props: { appData }
  }
}
