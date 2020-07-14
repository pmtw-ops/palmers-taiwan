
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'


export default function Collections({ allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <Layout>

      <p>This is ALL Collection Page</p>

    </Layout>

  )
}