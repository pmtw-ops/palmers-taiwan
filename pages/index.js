import Container from '@/components/container'
import Layout from '@/components/layout'
import { getHomePage } from '@/lib/api_home'
import CardRelatedProduct from '@/components/product/card-related-product'
import CardNews from '@/components/news/card-news'
import Head from 'next/head'
import Image from 'next/image'
import React from "react";

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function Index({ home, appData }) {
  let bannerImage = home?.image[0]
  let imgUrl = bannerImage ? CMS_URL + home.image[0].url : "https://via.placeholder.com/1920x550"
  let product_suggestions = home?.product_suggestions;

  return (
    <Layout appData={appData}>
      <Image className="" src={imgUrl} alt={""} width={1920} height={550} />
      <Container>
        <div className="text-pmbrown-700 mt-24 text-2xl">最新消息</div>
        <hr className="border-accent-2 mt-2 mb-4" />
        <div className="flex flex-row flex-wrap -mx-2 my-4">
          <CardNews />
          <CardNews />
          <CardNews />
          <CardNews />
        </div>
        <div className="text-pmbrown-700 mt-24 text-2xl">其他展品推薦</div>
        <hr className="border-accent-2 mt-2 mb-4" />
        <div className="flex overflow-x-scroll -mx-2 my-4">
          {
            product_suggestions.map((p, i) => (
              <CardRelatedProduct product={p} key={i} />
            ))
          }
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = null }) {
  const home = (await getHomePage(preview)) || []

  return {
    props: { home }
  }
}
