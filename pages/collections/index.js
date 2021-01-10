import Container from '@/components/container'
// import { getAllPostsForHome } from '@/lib/api_products'
import { getAllCollections, getCollectionsStatic } from '@/lib/api_collections'
import Head from 'next/head'
import CardCollection from '@/components/collection/card-collection'
import Link from 'next/link'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function Collections({ allCollections, collectionsStatic }) {
  let bannerImage = collectionsStatic.image[0];
  let bannerImageAlt = bannerImage ? collectionsStatic.image[0].alternativeText : ""
  let imgUrl = bannerImage ? CMS_URL + collectionsStatic.image[0].url : "https://via.placeholder.com/1920x550"

  return (
    <>
      <img className="" src={imgUrl} alt={bannerImageAlt}></img>
      <Container>
        <div className="">
          {allCollections.map((collection, i) => (<CardCollection key={i} i={i} collection={collection} />))}
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allCollections = (await getAllCollections()) || []
  const collectionsStatic = (await getCollectionsStatic()) || []

  return {
    props: { allCollections, collectionsStatic }
  }
}
