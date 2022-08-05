import '../styles/globals.css'
import Nav from '../components/nav'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>portfolio</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
