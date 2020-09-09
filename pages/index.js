import Container from '@/components/container'
import { getHomePage } from '@/lib/api_home'
import Head from 'next/head'
import { CMS_URL } from '@/lib/constants'
import React, { useContext } from "react";
import AppContext from "@/context/appcontext";

export default function Index({ home }) {
  return (
    <Container>
      <div>{home.title}</div>
    </Container>
  )
}

export async function getStaticProps({ preview = null }) {
  const home = (await getHomePage(preview)) || []
  return {
    props: { home }
  }
}
