import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Lançamento COHAUT</title>
      <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
      {/* <link href="fonts/simplonbpregular-webfont.woff2" rel="stylesheet" />
      <link href="fonts/simplonbp-bold-webfont.woff2" rel="stylesheet" /> */}
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
