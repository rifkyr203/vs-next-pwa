import { Provider } from 'react-redux'
import withRedux from '../store'
import Head from 'next/head'

const pwa = (props) => {
    const { Component, pageProps, store } = props
    return (
        <Provider store={store}>
          <Head>
            <meta charset="utf-8" />
            <title>Virtual Spirit</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#19A2B8" />
            <link rel="icon" href="/public/icons/favicon.ico" type="image/x-icon" />
            <link rel="manifest" href="manifest.json" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
          </Head>
          <Component {...pageProps} />
        </Provider>
      )
}
pwa.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}
export default withRedux(pwa)
