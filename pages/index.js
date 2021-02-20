import Container from '@/components/container'
import Layout from '@/components/layout'
import { getHomePage } from '@/graphql/api_home'
import { getAppData } from '@/graphql/api_app'
import CardRelatedProduct from '@/components/product/card-related-product'
import CardNews from '@/components/news/card-news'
import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import { CMS_URL } from '@/lib/constants'

export default function Index({ home, appData }) {
  let bannerImage = home?.image[0]
  let imgUrl = bannerImage ? CMS_URL + home.image[0].url : "https://via.placeholder.com/1920x550"
  let product_suggestions = home?.product_suggestions;

  return (
    <>
      <div className="grid place-content-center bg-white">
        <div className="relative">
          <video className="absolute opacity-40 border-red-500 border-2" width="1600" height="900" autoPlay muted>
            <source src={CMS_URL + home?.video[0].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className=" opacity-0">
            <img className="" src={"/img/home-logo-1600X880.jpg"} width={1600} height={880} />
          </div>
        </div>
      </div>
      <Layout appData={appData}>
        <Image className="" src={imgUrl} alt={""} width={1920} height={550} />
        <div className="-mt-2">
          <Container>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
            <div>品牌介紹</div>
          </Container>
        </div>
        <div className="-mt-2">
          <Container>
            <div className="text-pmbrown-700 mt-24 text-2xl">最新消息</div>
            <hr className="border-accent-2 mt-2 mb-4" />
            <div className="flex flex-row flex-wrap -mx-2 my-4">
              <CardNews />
              <CardNews />
              <CardNews />
              <CardNews />
            </div>
          </Container>
        </div>
        <div className="-mt-2">
          <Container>
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
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const home = (await getHomePage(preview)) || []
  const appData = (await getAppData()) || []

  return {
    props: { home, appData }
  }
}
