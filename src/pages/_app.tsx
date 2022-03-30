import '../styles/globals.css'
import 'swiper/css/bundle'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
  const value = true
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Por que continuar morando como antes?"
        />
        <meta name="author" content="BiroLab" />
        <meta
          name="keywords"
          content="cohaut, haut, incorporadora, design, empreendimento, recife, pernambuco"
        />

        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://cohaut.com" />
        <meta property="og:title" content="CO-HAUT" />
        <meta property="og:site_name" content="CO-HAUT" />
        <meta
          property="og:description"
          content="Por que continuar morando como antes?"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cohaut.com/wp-content/themes/cohaut/assets/images/og-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <title>Lançamento COHAUT</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={value.toString()}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,600;0,700;1,100;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
