import Container from '@/components/container'
import Layout from '@/components/layout'
// import { getAllPostsForHome } from '@/lib/api_products'
import { getAllCollections, getCollectionsStatic } from '@/lib/api_collections'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import CardCollection from '@/components/collection/card-collection'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function Collections({ allCollections, collectionsStatic, appData }) {
  let bannerImage = collectionsStatic.image[0];
  let bannerImageAlt = bannerImage ? collectionsStatic.image[0].alternativeText : ""
  let imgUrl = bannerImage ? CMS_URL + collectionsStatic.image[0].url : "https://via.placeholder.com/1920x550"

  return (
    <Layout appData={appData}>
      <Image className="" src={imgUrl} alt={bannerImageAlt} width={1920} height={550}/>
      <Container>
        <div className="">
          {allCollections.map((collection, i) => (<CardCollection key={i} i={i} collection={collection} />))}
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = null }) {
  const allCollections = (await getAllCollections()) || []
  const collectionsStatic = (await getCollectionsStatic()) || []

  return {
    props: { allCollections, collectionsStatic }
  }
}
