import Container from '@/components/container'
import InfoBlock from '@/components/legal/info-block'
import { getTermsAndConditions } from '@/graphql/api_terms'
import Head from 'next/head'

export default function Index({ termsAndCondition }) {
  return (
    <Container>
      <img className="min-w-full h-64" src="" alt="terms and agreement"></img>
      <h1 className="text-center p-2 text-6xl">{termsAndCondition.title}</h1>
      <h3 className="text-center p-2 text-xl">{termsAndCondition.pageDescription}</h3>
      <InfoBlock title={termsAndCondition.title_privacyPolicy} contents={''}></InfoBlock>
      <InfoBlock title={''} contents={''}></InfoBlock>
    </Container>
  )
}

export async function getStaticProps() {
  const termsAndCondition = (await getTermsAndConditions()) || []
  return {
    props: { termsAndCondition }
  }
}