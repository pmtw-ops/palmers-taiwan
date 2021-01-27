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
      <div className="text-center text-6xl">Under Constructions...</div>
    </Container>
  )
}

// This also gets called at build time
export async function getStaticProps({ params }) {

  // Pass post data to the page via props
  return {
    props: { }
  }
}
