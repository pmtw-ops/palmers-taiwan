import Container from '@/components/container'
import { getAllProductPaths, getOneProductDetails } from '@/lib/api_collections'
import { useRouter } from 'next/router'
import markdownToHtml from '@/lib/markdownToHtml'
import Head from 'next/head'

import CarouselProductImages from '@/components/product/carousel-product-images'

import Link from 'next/link'


export default function Product({ product }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const router = useRouter()

  console.log(product)
  if (router.isFallback) {
    return <div className="text-center text-6xl">Loading...</div>
  }

  return (
    <Container>
      <div className="block md:flex">
        <div>
          <CarouselProductImages images={product.images}></CarouselProductImages>
        </div>
        <div>Short Descriptions</div>
      </div>
      <div>Detail Block</div>
      <div>
        {product.name}
      </div>
      <div>
        {product.name_en}
      </div>
      <div>
        {product.measurement}
      </div>
      <div>
        {product.origin}
      </div>
      <div>
        {product.expiration}
      </div>
      <div>
        {product.description}
      </div>
      <div>
        {product.detail}
      </div>
      <div>
        {product.feature}
      </div>
      <div>
        {product.skin_type}
      </div>
      <div>
        {product.uses}
      </div>
      <div>
        {product.direction}
      </div>
      <div>
        {product.storage}
      </div>
      <div>
        {product.warning}
      </div>
      <div>
        {product.metaTitle}
      </div>
      <div>
        {product.metaDescription}
      </div>
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

  console.log(product)

  // Pass post data to the page via props
  return {
    props: { product }
  }
}
