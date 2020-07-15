
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import Container from '@/components/container'


export default function Index({ categories, collections, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <Layout categories={categories} collections={collections}>
      <Container>
        <p>This is about page </p>
      </Container>
    </Layout>
  )
}

// export async function getStaticProps({ preview = null }) {
//   //const allPosts = (await getAllPostsForHome(preview)) || []
//   console.log(allPosts)
//   return {
//     props: {} //allPosts, preview },
//   }
// }
