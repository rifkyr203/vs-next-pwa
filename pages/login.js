import Head from 'next/head'
import Layout from '../components/layout'
import LoginComponent from '../components/login'

const Login = () => {
  return (
    <Layout header="Login">
      <Head>
          <link rel='stylesheet' href="/styles/auth.css" />
      </Head>
      <LoginComponent/>
    </Layout>
  )
}

export default Login
