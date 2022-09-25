import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'


export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Mariam Youssef</title>
        <meta name="description" content="My Resume." />
      </Head>
      <Container></Container>
    </>
  )
}
