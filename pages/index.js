import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT MarketPlace</title>
        <meta name="description" content="NFt MarketPlace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeContent />


    </div>
  )
}
