import Container from '@/components/container'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import React, { useContext } from "react";
import AppContext from "@/context/appcontext";


export default function Index({ collections, categories, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)

  const { user, setUser } = useContext(AppContext);

  return (
    <Container>
      <div>Home Page</div>

    </Container>

  )
}

// export async function getStaticProps({ preview = null }) {
//   //const allPosts = (await getAllPostsForHome(preview)) || []
//   console.log(allPosts)
//   return {
//     props: {} //allPosts, preview },
//   }
// }
