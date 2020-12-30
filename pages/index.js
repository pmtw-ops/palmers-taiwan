import Container from '@/components/container'
import { getHomePage } from '@/lib/api_home'
import Head from 'next/head'
import React, { useContext } from "react";
import AppContext from "@/context/appcontext";

const CMS_URL = process.env.NEXT_PUBLIC_USE_DEV_DB === 'true' ? process.env.NEXT_PUBLIC_DEV_API_URL : process.env.NEXT_PUBLIC_PROD_API_URL;

export default function Index({ home }) {
  let bannerImage = home?.image[0]
  let imgUrl = bannerImage ? CMS_URL + home.image[0].formats.thumbnail.url.replace('thumbnail_', '') : "https://via.placeholder.com/1920x550"
  
  return (
    <>
      <img className="" src={imgUrl} alt={""}></img>
      <Container>
        <div>{home.title}</div>
        <div>Banner</div>
        <div>Hot Products</div>
        <div>News</div>
        <div></div>
      </Container>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const home = (await getHomePage(preview)) || []
  
  return {
    props: { home }
  }
}
