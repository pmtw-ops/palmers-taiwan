import Container from '@/components/container'
// import { getAllPostsForHome } from '@/lib/api_products'
import Head from 'next/head'

import CardCollection from '@/components/collection/card-collection'
import CardProduct from '@/components/product/card-product'

import Link from 'next/link'


export default function Collection({ product, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <img className="" src="https://via.placeholder.com/1920x550" alt=""></img>
      <Container>

        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  //const allPosts = (await getAllPostsForHome(preview)) || []
  // console.log(allPosts)

  const product = {
    title: '帕瑪氏水嫩潔顏卸妝乳150g',
    image: 'https://via.placeholder.com/1000x550',
    shortDesc: '清潔肌膚，使肌膚淨白柔嫩',
    price: 1300,
    rating: 3.5
  }

  return {
    props: { product }
  }
}

export async function getStaticPaths () {
  return { paths: [], fallback: true };
}
