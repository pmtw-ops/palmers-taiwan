import Container from '@/components/container'
import { getAllProductPaths } from '@/lib/api_collections'
import { getOneProductDetails, getRelatedProduct } from '@/lib/api_products'
import { useRouter } from 'next/router'
import CardRelatedProduct from '@/components/product/card-related-product'
import SectionSeparator from '@/components/section-separator'
import markdownToHtml from '@/lib/markdownToHtml'
import Head from 'next/head'

import CarouselProductImages from '@/components/product/carousel-product-images'
import ProductDescriptions from '@/components/product/product-descriptions'

import Link from 'next/link'


export default function Product({ product }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const router = useRouter()

  if (router.isFallback) {
    return <div className="text-center text-6xl">Loading...</div>
  }

  return (
    <Container>
      a lot of places to buy it
    </Container>
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
  let product = (await getOneProductDetails(params)) || {}
  let relatedProduct = (await getRelatedProduct(params)) || {}

  // Pass post data to the page via props
  return {
    props: { product, relatedProduct }
  }
}
