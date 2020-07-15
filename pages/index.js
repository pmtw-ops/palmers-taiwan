import Container from '@/components/container'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'


export default function Index({ collections, categories, allPosts, preview }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <Layout categories={categories} collections={collections}>


      <div className="w-full px-6 py-12 bg-white">
        <div className="container max-w-4xl mx-auto text-center pb-10">

          <h3 className="text-xl md:text-3xl leading-tight text-center max-w-md mx-auto text-gray-900 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</h3>

          <a href="#" className="bg-black text-white px-4 py-3 no-underline">Browse our products</a>

        </div>

        <div className="container max-w-4xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap">

          <div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
            <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800" className="w-full h-64 object-cover mb-6" />

            <h2 className="text-xl leading-tight mb-2">Ut enim ad minim veniam officia deserunt</h2>
            <p className="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.</p>
          </div>

          <div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
            <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800" className="w-full h-64 object-cover mb-6" />

            <h2 className="text-xl leading-tight mb-2">Ut enim ad minim veniam officia deserunt</h2>
            <p className="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.</p>
          </div>

          <div className="my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4">
            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=800" className="w-full h-64 object-cover mb-6" />

            <h2 className="text-xl leading-tight mb-2">Ut enim ad minim veniam officia deserunt</h2>
            <p className="mt-3 mx-auto text-sm leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.</p>
          </div>

        </div>
      </div>


      <div className="w-full px-6 py-12 text-left bg-gray-300 text-gray-700 leading-normal">
        <div className="container max-w-4xl mx-auto flex justify-center flex-wrap md:flex-no-wrap">
          <div className="w-full md:w-1-3">
            <h3 className="text-3xl mb-8 text-black leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
					</h3>

            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut.</p>
            <p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="w-full md:w-2-3 pt-10 md:px-6 md:pt-0">
            <img src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800" className="w-full h-auto" />
          </div>
        </div>
      </div>


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
