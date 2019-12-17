import {useState} from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import ForgotPasswordComponent from '../components/forgot-password'
import ForgotPasswordOTPComponent from '../components/forgot-password/otp'
import NewPasswordComponent from '../components/forgot-password/newPassword'
import SuccessComponent from '../components/forgot-password/success'

const ForgotPassword = () => {
  const [level, setLevel] = useState(1)
  if(level === 4){
    return <SuccessComponent/>
  }else{
    return (
      <Layout title="Forgot Password">
        <Head>
            <link rel='stylesheet' href="/styles/auth.css" />
        </Head>
        {level === 1 && <ForgotPasswordComponent/>}
        {level === 2 && <ForgotPasswordOTPComponent/>}
        {level === 3 && <NewPasswordComponent/>}
      </Layout>
    )
  }
}

export default ForgotPassword
