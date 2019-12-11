import React from 'react'
import { Provider } from 'react-redux'
import withRedux from '../store'
import Head from 'next/head'


const pwa = (props) => {
    const { Component, pageProps, store } = props
    return (
        <Provider store={store}>
          <Head>
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