import { getAllNewsPosts } from '@/lib/api_news'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Container from '@/components/container'
import Layout from '@/components/layout'

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function index({ appData }) {
  const router = useRouter()

  let imgUrl = "https://via.placeholder.com/1920x550"

  if (router.isFallback) {
    return <div className="text-center text-6xl">Loading...</div>
  }

  return (
    <Layout appData={appData}>
      <Image className="" src={imgUrl} alt="" width={1920} height={550}/>
      {/* <img className="" src={imgUrl} alt=""></img> */}
      <Container>
        <div className="flex flex-row flex-wrap -mx-2 my-4">
        </div>
      </Container>
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get collections
  const allNewsPosts = (await getAllNewsPosts()) || []

  console.log(allNewsPosts)

  // Get the paths we want to pre-render based on collections
  const paths = allNewsPosts.map((post) => ({
    params: { posts: post.title },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // const oneCollectionProducts = (await getOneCollectionProducts(params.collection)) || []

  // Pass post data to the page via props
  return {
    props: { }
  }
}
