import Container from '@/components/container'
import { getAllProductPaths, getOneProductDetails } from '@/lib/api_collections'
import { useRouter } from 'next/router'
import markdownToHtml from '@/lib/markdownToHtml'
import Head from 'next/head'

import CardProduct from '@/components/product/card-product'

import Link from 'next/link'


export default function Product({ product, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const router = useRouter()

  console.log(product)
  if (router.isFallback) {
    return <div className="text-center text-6xl">Loading...</div>
  }

  return (
    <>
      <img className="" src="https://placehold.it/1920x550" alt=""></img>
      <Container>
        <div>
          {product.name}
        </div>
        <div>
          {product.description}
        </div>
      </Container>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get collections
  const allProductPaths = (await getAllProductPaths()) || []

  // Get the paths we want to pre-render based on collections
  const paths = allProductPaths.map((path) => {
    var p = path?.product;
    var c = path?.collections[0];
    c = c?.name;
    
    if (p.length > 0 && c !== undefined) {
      return {
        params: {
          product: p,
          collection: c
        }
      }
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  let products = (await getOneProductDetails(params)) || []

  let product = products.length > 0 ? products[0] : {}

  let description = await markdownToHtml(product.description)
  description = description.split('\n')

  productName = product?.name;

  product = {
    name: productName,
    description: description
  }
  // Pass post data to the page via props
  return {
    props: { product }
  }
}
