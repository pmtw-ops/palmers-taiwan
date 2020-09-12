import Container from '@/components/container'
// import { getAllPostsForHome } from '@/lib/api_products'
import { getAllCollections } from '@/lib/api_collections'
import Head from 'next/head'

import CardCollection from '@/components/collection/card-collection'

import Link from 'next/link'


export default function Collections({ allCollections, allPosts, preview }) {
  return (
    <>
      <img className="" src="https://placehold.it/1920x550" alt=""></img>
      <Container>
        {allCollections.map((collection, i) => (<CardCollection i={i} collection={collection} />))}

      </Container>
    </>
  )
}



export async function getStaticProps({ preview = null }) {
  const allCollections = (await getAllCollections(preview)) || []
  // console.log(allCollections)

  return {
    props: { allCollections } //allPosts, preview },
  }
}
