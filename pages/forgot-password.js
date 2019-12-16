import {useState} from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import ForgotPasswordComponent from '../components/forgot-password'
import ForgotPasswordOTPComponent from '../components/forgot-password/otp'
import NewPasswordComponent from '../components/forgot-password/newPassword'
import SuccessComponent from '../components/forgot-password/success'

const ForgotPassword = () => {
  const [level, setLevel] = useState(4)
  return (
    <Layout header="Forgot Password">
      <Head>
          <link rel='stylesheet' href="/styles/auth.css" />
      </Head>
      {level === 1 && <ForgotPasswordComponent/>}
      {level === 2 && <ForgotPasswordOTPComponent/>}
      {level === 3 && <NewPasswordComponent/>}
      {level === 4 && <SuccessComponent/>}
    </Layout>
  )
}

export default ForgotPassword
