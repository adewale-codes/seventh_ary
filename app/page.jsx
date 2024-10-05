import Head from 'next/head'
import Hero from '@/app/components/Hero'
import Featured from '@/app/components/Featured'
import PopularWears from './components/PopularWears'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEVENTH ARY 7 official website</title>
        <meta property="og:title" content="SEVENTH ARY official website" key="title" />
      </Head>
      <Hero />
      <Featured />
      <PopularWears />
    </div>
  )
}
