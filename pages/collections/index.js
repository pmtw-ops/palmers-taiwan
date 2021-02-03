import Container from '@/components/container'
import Layout from '@/components/layout'
// import { getAllPostsForHome } from '@/lib/api_products'
import { getAllCollections, getCollectionsStatic } from '@/lib/api_collections'
import { getAppData } from '@/lib/api_app'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import CardCollection from '@/components/collection/card-collection'
import { CMS_URL } from '@/lib/constants'

export default function Collections({ allCollections, collectionsStatic, appData }) {
  let bannerImage = collectionsStatic.image[0];
  let bannerImageAlt = bannerImage ? collectionsStatic.image[0].alternativeText : ""
  let imgUrl = bannerImage ? CMS_URL + collectionsStatic.image[0].url : "https://via.placeholder.com/1920x550"

  return (
    <Layout appData={appData}>
      <Image className="" src={imgUrl} alt={bannerImageAlt} width={1920} height={550} />
      <Container>
        <div className="">
          {allCollections.map((collection, i) => (<CardCollection key={i} i={i} collection={collection} />))}
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ }) {
  const appData = (await getAppData()) || []
  const allCollections = (await getAllCollections()) || []
  const collectionsStatic = (await getCollectionsStatic()) || []

  return {
    props: { appData, allCollections, collectionsStatic }
  }
}
