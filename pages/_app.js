import { Provider } from 'react-redux'
import withRedux from '../store'
import Head from 'next/head'

const pwa = (props) => {
    const { Component, pageProps, store } = props
    return (
        <Provider store={store}>
          
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
