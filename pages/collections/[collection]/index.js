import { getAllCollections, getOneCollectionProducts } from '@/lib/api_collections'
import { useRouter } from 'next/router'
import CardProduct from '@/components/product/card-product'
import Container from '@/components/container'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function Collection({ oneCollectionProducts }) {
  const products = oneCollectionProducts?.products;
  const bannerImage = oneCollectionProducts?.featureImage[0];
  const router = useRouter()

  let imgUrl = bannerImage ? CMS_URL + oneCollectionProducts.featureImage[0].formats.thumbnail.url.replace('thumbnail_', '') : "https://placehold.it/1920x550"

  if (router.isFallback) {
    return <div className="text-center text-6xl">Loading...</div>
  }

  return (
    <>
      <img className="" src={imgUrl} alt=""></img>
      <Container>
        <div className="flex justify-center flex-wrap sm:grid text-center m-4 gap-6 justify-items-stretch md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, i) => (
            <div className="w-10/12 max-w-xs w-full" key={i}>
              <CardProduct i={i} product={product} />
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get collections
  const allCollections = (await getAllCollections()) || []

  // Get the paths we want to pre-render based on collections
  const paths = allCollections.map((collection) => ({
    params: { collection: collection.name },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const oneCollectionProducts = (await getOneCollectionProducts(params.collection)) || []

  // Pass post data to the page via props
  return {
    props: { oneCollectionProducts }
  }
}
