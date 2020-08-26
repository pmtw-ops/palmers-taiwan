import Container from '@/components/container'
// import { getAllPostsForHome } from '@/lib/api_products'
import Head from 'next/head'

import CardCollection from '@/components/collection/card-collection'

import Link from 'next/link'


export default function Collections({ product, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      <img className="" src="https://placehold.it/1920x550" alt=""></img>
      <Container>
        <CardCollection i={0} product={product}></CardCollection>
        <CardCollection i={1} product={product}></CardCollection>
        <CardCollection i={2} product={product}></CardCollection>
        <CardCollection i={3} product={product}></CardCollection>
        <CardCollection i={4} product={product}></CardCollection>
        <CardCollection i={5} product={product}></CardCollection>
        <CardCollection i={6} product={product}></CardCollection>
        <CardCollection i={7} product={product}></CardCollection>
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  //const allPosts = (await getAllPostsForHome(preview)) || []
  // console.log(allPosts)

  const product = {
    title: '帕瑪氏水嫩潔顏卸妝乳150g',
    image: 'https://placehold.it/1000x550',
    shortDesc: '清潔肌膚，使肌膚淨白柔嫩',
    price: 1300,
    rating: 3.5
  }

  return {
    props: { product } //allPosts, preview },
  }
}
