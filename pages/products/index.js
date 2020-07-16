
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'


import Layout from '@/components/layout'
import Container from '@/components/container'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'

import CardProduct from '@/components/card-product'

import Link from 'next/link'


export default function Products({ categories, collections, product, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <Layout categories={categories} collections={collections}>
      <Container>
        <p>This is NEWS page </p>
        <div className="grid gap-4 grid-flow-row sm:grid-cols-2 lg:grid-cols-3">
        <div className=""><CardProduct product={product} /></div>
        <div className=""><CardProduct product={product} /></div>
        <div className=""><CardProduct product={product} /></div>
        <div className=""><CardProduct product={product} /></div>
        <div className=""><CardProduct product={product} /></div>
        </div>
      </Container>
    </Layout>

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
