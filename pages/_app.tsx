import '../assets/styles/main.scss';
import type { AppProps } from 'next/app';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fake Hosting</title>
      </Head>
      <Component {...pageProps} />
    </>
)
}
export default MyApp
