import Head from 'next/head';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="preconnect" href="//pbs.twimg.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
