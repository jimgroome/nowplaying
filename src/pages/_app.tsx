import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Now playing on BBC 6 Music" />
        <title>Now playing on BBC 6 Music</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/icons/icon-128x128.png" />
        <link rel="apple-touch-icon" href="/images/icons/icon-128x128.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
