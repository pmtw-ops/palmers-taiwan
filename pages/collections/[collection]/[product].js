import Container from '@/components/container'
import { getAllProductPaths, getOneProductDetails } from '@/lib/api_collections'
import { useRouter } from 'next/router'
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
      <div className="block md:grid md:grid-cols-2">
        <div className="w-full md:p-2">
          <CarouselProductImages images={product.images}></CarouselProductImages>
        </div>
        <div className="w-full md:p-2">
          <ProductDescriptions product={product}></ProductDescriptions>
        </div>
      </div>
      <div className="p-4 m-4"></div>
      <div className="text-pmbrown-700 text-2xl">產品特點</div>
      <hr className="border-accent-2 mt-2 mb-4" />
      <div className="p-2 mb-4">
        {product.feature}...
      </div>
      <div className="text-pmbrown-700 text-2xl">使用方法</div>
      <hr className="border-accent-2 mt-2 mb-4" />
      <div className="p-2">
        {product.uses}
      </div>
      <div className="p-2">
        {product.direction}
      </div>
      <div className="p-2">
        {product.skin_type}
      </div>
      <div className="p-2">
        產地: {product.origin}
      </div>
      <div className="p-2">
        保存期限: {product.expiration}
      </div>
      <div className="p-2 mb-4">
        {product.storage}
      </div>
      <div className="text-pmbrown-700 text-2xl">注意事項</div>
      <hr className="border-accent-2 mt-2 mb-4" />
      <div className="p-2 mb-4">
        {product.warning}
      </div>

      <div className="text-pmbrown-700 mt-24 text-2xl">其他展品推薦</div>
      <hr className="border-accent-2 mt-2 mb-4" />
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

  // Pass post data to the page via props
  return {
    props: { product }
  }
}
